const fs = require('fs')
const countries = require('./countries')
const parseCurl = require('./parseCurl')
const fetch = require('isomorphic-fetch')
const _ = require('lodash')
const countryLookup = require('country-code-lookup')
const ShellQuote = require('shell-quote')

const FILE_PATH = './request.curl'

let commandComponents

if (fs.existsSync(FILE_PATH)) {
  const rawCurl = fs.readFileSync(FILE_PATH, { encoding: 'utf8' })

  commandComponents = ShellQuote.parse(rawCurl)
} else if (process.argv.length > 2) {
  commandComponents = process.argv.slice(2)
} else {
  console.error("Please either created a \"request.curl\" or pass command as an argument")
  return
}

const parsedUrlOptions = parseCurl(commandComponents)

const geoOptions = {
  credentials: "include",
  method: "POST",
  mode: "cors",
  headers: parsedUrlOptions.headers,
  body: parsedUrlOptions.body
}

const loadCountryItinerary = async ({ country }) => {
  const countryGeoOptions = { ...geoOptions, headers: { ...geoOptions.headers } } // clone
  countryGeoOptions.body = countryGeoOptions.body.replace(/"market":"\w+"/g, `\"market\":\"${country}\"`)
  const response = await fetch("https://www.skyscanner.ru/g/conductor/v1/fps3/search/?geo_schema=skyscanner&carrier_schema=skyscanner&response_include=query%3Bdeeplink%3Bsegment%3Bstats%3Bfqs%3Bpqs", countryGeoOptions)
  if (response.status >= 400) {
    const text = await response.text()
    if (text.includes('captcha')) {
      console.log("Skyscanner is requesting you to pass a captcha, please reload the page, wait for captcha to appear (might take several seconds) and then run the script again")
      process.exit()
    }
    throw new Error(`Bad response from server: ${response.status}, ${text}`);
  }
  const json = await response.json()
  const sessionId = json.context.session_id
  const requestId = json.context.request_id
  const gateway = response.headers.get('x-gateway-servedby')
  const itineraries = await loadItineraries({ sessionId, requestId, country, gateway })
  const bestItinerary = _.sortBy(itineraries, (i) => -i.score)[0]
  if (!bestItinerary) {
    return null
  }
  const bestItineraryPrice = bestItinerary.pricing_options[0].price.amount
  const countryName = countryLookup.byIso(country)
  return {
    country,
    // itinerary: bestItinerary,
    bestItineraryPrice,
    countryName: countryName ? countryName.country : null
  }
}

const loadItineraries = async ({ sessionId, requestId, country, gateway }) => {
  let result
  // [0, 2, 4, 6]
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  const promises = [2, 10].map(async (i) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000 * i)
    })
    const headers = {"accept":"application/json","accept-language":"en-US,en;q=1.0","cache-control":"no-cache","content-type":"application/json","pragma":"no-cache","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-gateway-servedby": gateway,"x-skyscanner-channelid":"website","x-skyscanner-devicedetection-ismobile":"false","x-skyscanner-devicedetection-istablet":"false","x-skyscanner-traveller-context": geoOptions.headers["x-skyscanner-traveller-context"], "x-skyscanner-utid": geoOptions.headers["x-skyscanner-utid"], "x-skyscanner-viewid": requestId, cookie: geoOptions.headers['cookie'] }

    const url = `https://www.skyscanner.ru/g/conductor/v1/fps3/search/${sessionId}?geo_schema=skyscanner&carrier_schema=skyscanner&response_include=query%3Bdeeplink%3Bsegment%3Bstats%3Bfqs%3Bpqs`

    const options = {"credentials":"include","headers": headers,"referrer":"https://www.skyscanner.ru/transport/flights/kuf/prg/191231/200106/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&market=RU&locale=en-US&currency=USD","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"}

    const response = await fetch(url, options);
    if (response.status >= 400) {
      const text = await response.text()
      const errorMessage = `Bad response from server: ${response.status}, ${text}`
      if (text.includes('captcha')) {
        console.log("Skyscanner is requesting you to pass a captcha, please reload the page, wait for captcha to appear (might take several seconds) and then run the script again")
        process.exit()
      }
      if (text.includes("Session not found in state")) {
        console.log("A temporary error has occurred, try again")
        process.exit()
      }
      console.log(errorMessage)
      console.log(url)
      return
    }
    result = await response.json()
  })
  await Promise.all(promises)
  if (!result) {
    console.log(`No result for ${country}`)
    return []
  }
  return result.itineraries
}

const run = async () => {
  const selectedCountries = _.sampleSize(countries, 20)
  // const selectedCountries = countries.slice(0, 5)
  // const selectedCountries = ['RU']

  const countryItineraries = await Promise.all(selectedCountries.map(country => loadCountryItinerary({ country })))

  const sortedCountries = _.sortBy(countryItineraries.filter(c => c), (c) => c.bestItineraryPrice)

  console.log(sortedCountries)
}

run()
