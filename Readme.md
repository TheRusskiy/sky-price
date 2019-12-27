# Sky Price

## Find cheapest option for your SkyScanner destination

## How does it work?

A little known fact is that SkyScanner shows different prices based on your selected country, the goal of this program is to compare different countries and return you the best price.

## What do I need to do?

SkyScanner is careful about protecting against automated scripts, so a little work on your part is required to make the script look human.

* First, find the destination you want to go, the destination link something like this "https://www.skyscanner.ru/transport/flights/kuf/prag/200110/200113/...".
* Then open chrome dev tools, open network tab and refresh the page to make the web browser to perform all requests.
* Find a request that looks like `https://www.skyscanner.ru/g/conductor/v1/fps3/search/?geo_schema=...`
* Click on it and select `Copy` -> `Copy as cURL`
* 1. Run `yarn start <INSERT COPIED COMMAND>`, 
  2. ...Or create a file called `request.curl`, paste the contents there and run `yarn start`.
* Each time you run the script, it picks 20 random countries, so you can run multiple times
