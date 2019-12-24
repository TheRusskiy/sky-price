const cookie = "X-Mapping-rrsqbjcb=0; _pxhd=f1b5a041b51cb38fc082ca85c90dda7352decd3fa1fac1943a123875bcf44fad:84b509d1-268e-11ea-8ad6-9308a2e8c11f; ssaboverrides=; abgroup=30975573; traveller_context=7f78e07f-5516-40a6-a9d4-ae30a658bbc8; ssab=AAExperiment_V8:::a&Ads_Singapore_Airlines_Dbook_Multiplier_V1:::b&BD_mWeb_Ite3_HD_V3:::b&BwS_InAppCare_NPS_StoreTask_V6:::on&CLABS_Web_New_Review_Page_V1:::a&CSP_header_on_hercules_V7:::b&FLUX_GDT2791_SendPriceTraceToMixpanel_V6:::b&FSS_upsell_shadow_V13:::b&GDT_4463_turn_on_shelves_after_p1_V9:::b&InlinePriceLimit_V10:::a&MR_HotelRelevance_IronTrainMR11_V3:::b&PAN_no_new_page_open_and_add_back_button_in_header_V4:::a&Refund_Enable_QueryHistory_V1:::on&RoutesSeoDestinationHotels_V14:::b&SelectBaggageDefault_V6:::b&TERRA_Hercules_Show_Carbon_Offset_Link_V2:::b&TerraEcoSortFilter_V10:::b&Trex_DirectDays_Web_V21:::b&WOM_checkout_form_refactor_V4:::a&WOM_new_room_rates_UI_V13:::b&change_optional_extra_title_V10:::b&conductor_fps_response_logs_V3:::a&dbook_asia_trafficcontrol_accept_web_V7:::a&dbook_drag_trafficcontrol_all_web_V2:::a&dbook_eurw_traffic_control_in_web_V1:::a&dbook_jest_trafficcontrol_web_V10:::a&dbook_ryan_trafficcontrol_web_V7:::a&dbook_sune_trafficcontrol_web_V5:::a&fps_bws_partner_web_xxau_V13:::xxau&fps_partner_data_if_V18:::c&freeag_month_show_hotel_V6:::b&mr_relevance_service_request_duplicator_V5:::a&mr_request_duplicator_test_01_V9:::a&pel_use_website_link_data_V10:::b&tempatron_rollout_V8:::a&terra_artemis_conductor_V28:::a&title_field_removal_V1:::b; experiment_allocation_id=2840e272b24e28ca18c6fb12ef3af020bdf22fb9012c71ed246f4fedc4311096; ssculture=locale:::en-US&market:::RU&currency:::USD; scanner=currency:::USD&legs:::MOSC|2020-04-30|CPT|CPT|2020-05-10|MOSC&oym:::2001&oday&wy:::0&iym:::2001&iday&preferDirects:::false&from:::KUF&to:::PRG; device_guid=1778beb2-82d0-4320-b534-96bf1ec9bca6; akacd_Acorn_Split_Traffic=1577831268~rv=70~id=31dd21e952999cfb48de5134e3d053e3; RT=\"z=1&dm=skyscanner.ru&si=855f2def-53a5-4364-9ace-105516e59590&ss=k4kcb807&sl=t&tt=1ici&bcn=%2F%2F685b3919.akstat.io%2F\"; preferences=7f78e07f551640a6a9d4ae30a658bbc8; _ga=GA1.2.283091457.1577220417; _gid=GA1.2.1618418485.1577220417; usbls=1; _ym_uid=1577220420701843337; _ym_d=1577220420; _ym_isad=1; _pxvid=88a1f3ec-268e-11ea-b9c7-0242ac120009; _px3=ece95c511ea1b36612a9561d1cb0ac8de031302589b47cf97a0c02e7a8b2a7d3:d03af7VCozDODHomfqymGPyvgsOLDJOFLLXPtiBToSEt6xeCwzub3s+A2Ge4UBLdksBzW3PmpOslJTiA0BwYAw==:1000:CJzwmyQC2WtTMxvcZkkDV/NSn1TgSKdqr2oSI+g4T2wOA9tZatTbW2S4NwS4g+ir7U31T8+53WXzeaw776ZGMLbd7GmkiPt3wTw/v4oUQ9+UobgRS3ljLV/T5+1PMQE3LO/q/+wmJGUwxK7N8zlttzJ9rXLxUAkJPnpGJ6CCB4Q=; _fbp=fb.1.1577220421335.1344349805; cto_bundle=lFikAV9wVDFxZ0QxJTJCM2t1VjNFcW9SaEdkRFkwZEM4YVhDSzBzRUhQTTBUYzNuT0J0bjVwamN6UU5rNlZTbU9WajVTWk5LODdoWldJRW9wcGdSUXNObGU3eTNiZ1N5SVIzaGRCVVd4VkJxZld2TU50Nm1KbUROanhlYktzb002ejN5WkFWb2FncEN2MXY0MnBjeUZsMEVnZ3hlUSUzRCUzRA"

const geoOptions = {
  "credentials": "include",
  "headers": {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0",
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "X-Skyscanner-ChannelId": "website",
    "X-Skyscanner-MixPanelId": "1694dbc0747975-0c547e5570983a-36667105-384000-1694dbc07489ef",
    "X-Skyscanner-DeviceDetection-IsMobile": "false",
    "X-Skyscanner-DeviceDetection-IsTablet": "false",
    "X-Skyscanner-Traveller-Context": "7f78e07f-5516-40a6-a9d4-ae30a658bbc8",
    "X-Skyscanner-Utid": "7f78e07f-5516-40a6-a9d4-ae30a658bbc8",
    "X-Skyscanner-ViewId": "eee71471-93e0-4890-b998-64bb414c51cf",
    "Content-Type": "application/json",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache"
  },
  "referrer": "https://www.skyscanner.ru/transport/flights/kuf/prg/200110/200113/?adultsv2=1&childrenv2=&cabinclass=economy&rtn=1&preferdirects=true&outboundaltsenabled=false&inboundaltsenabled=false&qp_prevProvider=ins_month&qp_prevCurrency=USD&qp_prevPrice=361&priceSourceId=taps-taps&priceTrace=201912242003*D*KUF*PRG*20200110*citr*OK|201912242003*D*PRG*KUF*20200113*citr*QS",
  "body": "{\"destination\":{\"id\":\"PRG\",\"airportId\":\"PRG\",\"name\":\"Prague\",\"cityId\":\"PRAG\",\"cityName\":\"Prague\",\"countryId\":\"CZ\",\"type\":\"Airport\",\"centroidCoordinates\":[14.266667,50.1]},\"origin\":{\"id\":\"KUF\",\"airportId\":\"KUF\",\"name\":\"Samara\",\"cityId\":\"SAMA\",\"cityName\":\"Samara\",\"countryId\":\"RU\",\"type\":\"Airport\",\"centroidCoordinates\":[50.15,53.5]},\"adults\":1,\"cabin_class\":\"economy\",\"cabinClass\":\"ECONOMY\",\"inboundDate\":\"2020-01-13\",\"options\":{\"include_unpriced_itineraries\":true,\"include_mixed_booking_options\":true},\"child_ages\":[],\"outboundDate\":\"2020-01-10\",\"prefer_directs\":true,\"state\":{},\"alternativeOrigins\":false,\"alternativeDestinations\":false,\"market\":\"RU\",\"locale\":\"en-US\",\"currency\":\"USD\",\"viewId\":\"eee71471-93e0-4890-b998-64bb414c51cf\",\"travellerContextId\":\"7f78e07f-5516-40a6-a9d4-ae30a658bbc8\",\"trusted_funnel_search_guid\":\"eee71471-93e0-4890-b998-64bb414c51cf\",\"legs\":[{\"origin\":\"KUF\",\"destination\":\"PRG\",\"date\":\"2020-01-10\",\"return_date\":\"2020-01-13\",\"add_alternative_origins\":false,\"add_alternative_destinations\":false}]}",
  "method": "POST",
  "mode": "cors"
}

geoOptions.headers.cookie = cookie

const countries = require('./countries')
const fetch = require('isomorphic-fetch')
const _ = require('lodash')
const countryLookup = require('country-code-lookup')

const loadCountryItinerary = async ({ country }) => {
  const countryGeoOptions = { ...geoOptions, headers: { ...geoOptions.headers } }
  countryGeoOptions.body = countryGeoOptions.body.replace(/"market":"\w+"/g, `\"market\":\"${country}\"`)
  const response = await fetch("https://www.skyscanner.ru/g/conductor/v1/fps3/search/?geo_schema=skyscanner&carrier_schema=skyscanner&response_include=query%3Bdeeplink%3Bsegment%3Bstats%3Bfqs%3Bpqs", countryGeoOptions)
  if (response.status >= 400) {
    const text = await response.text()
    throw new Error(`Bad response from server: ${response.status}, ${text}`);
  }
  const json = await response.json()
  // console.log(json)
  const sessionId = json.context.session_id
  const requestId = json.context.request_id
  const itineraries = await loadItineraries({ sessionId, requestId, country })
  // console.log(itineraries.length)
  // console.log(_.sortBy(itineraries, (i) => i.score).map(i => i.score))
  // console.log(_.sortBy(itineraries, (i) => i.score).map(i => i.pricing_options[0].price.amount))
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

const loadItineraries = async ({ sessionId, requestId, country }) => {
  let result
  // [0, 2, 4, 6]
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  const promises = [2, 10].map(async (i) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000 * i)
    })
    const headers = {"accept":"application/json","accept-language":"en-US,en;q=0.9,ru;q=0.8","cache-control":"no-cache","content-type":"application/json","pragma":"no-cache","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-gateway-servedby":"gw53.skyscanner.net","x-skyscanner-channelid":"website","x-skyscanner-devicedetection-ismobile":"false","x-skyscanner-devicedetection-istablet":"false","x-skyscanner-mixpanelid":"1694dbc0747975-0c547e5570983a-36667105-384000-1694dbc07489ef","x-skyscanner-traveller-context": geoOptions.headers["X-Skyscanner-Traveller-Context"], "x-skyscanner-utid": geoOptions.headers["X-Skyscanner-Utid"], "x-skyscanner-viewid": requestId, cookie }

    const url = `https://www.skyscanner.ru/g/conductor/v1/fps3/search/${sessionId}?geo_schema=skyscanner&carrier_schema=skyscanner&response_include=query%3Bdeeplink%3Bsegment%3Bstats%3Bfqs%3Bpqs`

    const options = {"credentials":"include","headers": headers,"referrer":"https://www.skyscanner.ru/transport/flights/kuf/prg/191231/200106/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&market=RU&locale=en-US&currency=USD","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"}

    // console.log({ i, sessionId, requestId, country })
    // console.log(url)
    // console.log(options)
    const response = await fetch(url, options);
    if (response.status >= 400) {
      const text = await response.text()
      const errorMessage = `Bad response from server: ${response.status}, ${text}`
      console.log(errorMessage)
      console.log(url)
      // console.log(headers)
      return
      // throw new Error(errorMessage)
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
  const selectedCountries = _.sampleSize(countries, 10)
  // const selectedCountries = countries.slice(0, 5)
  // const selectedCountries = ['RU']

  const countryItineraries = await Promise.all(selectedCountries.map(country => loadCountryItinerary({ country })))

  const sortedCountries = _.sortBy(countryItineraries.filter(c => c), (c) => c.bestItineraryPrice)

  console.log(sortedCountries)
}

run()
