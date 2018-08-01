# geography

Geographical definitions used by Apolitical services. Currently provides lookup functions from regions to a list of countries in that region.

## Usage

```
const {
  regions,
  countriesInRegion,
  countryCodesInRegion,
  countryNamesInRegion,
} = require('@apolitical/geography');

regions() // Get a list of region codes

regionName('afr', 'en-GB') // The name of the afr region in UK English (i.e. Africa)

countryNamesInRegion('afr') // Country names in Africa
countryCodesInRegion('eur') // Country code in Europe
countriesInRegion('na') // Code->name map for North America
```


## Regions

The region codes correspond to:

|code|name|
|---|---|
|afr| Africa |
|cas| Central Asia |
|eap| East Asia & Pacific |
|eur| Europe |
|lac| Latin America & Caribbean |
|mena| Middle East & North Africa |
|na| North America |
|oc| Oceania |
|sar| South Asia |

These are based on regions defined by the [World Bank](http://www.worldbank.org/en/where-we-work), except that we
include Oceania, North America, and split out Europe and Central Asia.
