// @flow
// Regions of the world as defined by the World Bank
// Source list of countries is the wordpress code;
// this is also where the strings come from, as they're in the database

type Region = { [key: string]: string };
type RegionMap = { [key: string]: Region };

const worldBankRegions: RegionMap = {
  // Africa
  afr: {
    countries: {
      AO: 'Angola',
      BF: 'Burkina Faso',
      BI: 'Burundi',
      BJ: 'Benin',
      BW: 'Botswana',
      CD: 'Congo',
      CF: 'Central African Republic',
      CI: 'Cote d\'Ivoire',
      CM: 'Cameroon',
      CV: 'Cape Verde',
      EH: 'Western Sahara',
      ER: 'Eritrea',
      ET: 'Ethiopia',
      GA: 'Gabon',
      GH: 'Ghana',
      GM: 'Gambia',
      GN: 'Guinea',
      GQ: 'Equatorial Guinea',
      GW: 'Guinea-Bissau',
      KE: 'Kenya',
      KM: 'Comoros',
      LR: 'Liberia',
      LS: 'Lesotho',
      MG: 'Madagascar',
      ML: 'Mali',
      MR: 'Mauritania',
      MU: 'Mauritius',
      MW: 'Malawi',
      MZ: 'Mozambique',
      NA: 'Namibia',
      NE: 'Niger',
      NG: 'Nigeria',
      RE: 'Reunion',
      RW: 'Rwanda',
      SC: 'Seychelles',
      SD: 'Sudan',
      SL: 'Sierra Leone',
      SN: 'Senegal',
      SO: 'Somalia',
      ST: 'Sao Tome and Principe',
      SZ: 'Swaziland',
      TD: 'Chad',
      TG: 'Togo',
      TZ: 'Tanzania',
      UG: 'Uganda',
      ZA: 'South Africa',
      ZM: 'Zambia',
      ZW: 'Zimbabwe',
    },
  },
  // Central Asia
  cas: {
    countries: {
      AM: 'Armenia',
      AZ: 'Azerbaijan',
      GE: 'Georgia',
      KG: 'Kyrgyz Republic',
      KZ: 'Kazakhstan',
      RU: 'Russian Federation',
      TJ: 'Tajikistan',
      TM: 'Turkmenistan',
      TR: 'Turkey',
      UZ: 'Uzbekistan',
    },
  },
  // East Asia and Pacific
  eap: {
    countries: {
      BN: 'Brunei Darussalam',
      CN: 'China',
      HK: 'Hong Kong',
      ID: 'Indonesia',
      JP: 'Japan',
      KH: 'Cambodia',
      KR: 'Korea',
      LA: 'Lao',
      MM: 'Myanmar',
      MN: 'Mongolia',
      MO: 'Macao',
      MY: 'Malaysia',
      PH: 'Philippines',
      SG: 'Singapore',
      TH: 'Thailand',
      TW: 'Taiwan',
      VN: 'Vietnam',
    },
  },
  // Europe
  eur: {
    countries: {
      AD: 'Andorra',
      AL: 'Albania',
      AT: 'Austria',
      BA: 'Bosnia and Herzegovina',
      BE: 'Belgium',
      BG: 'Bulgaria',
      BY: 'Belarus',
      CH: 'Switzerland',
      CY: 'Cyprus',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DK: 'Denmark',
      EE: 'Estonia',
      ES: 'Spain',
      FI: 'Finland',
      FO: 'Faroe Islands',
      FR: 'France',
      GB: 'United Kingdom',
      GG: 'Guernsey',
      GI: 'Gibraltar',
      GL: 'Greenland',
      GR: 'Greece',
      HR: 'Croatia',
      HU: 'Hungary',
      IE: 'Ireland',
      IM: 'Isle of Man',
      IS: 'Iceland',
      IT: 'Italy',
      JE: 'Jersey',
      LI: 'Liechtenstein',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      LV: 'Latvia',
      MC: 'Monaco',
      MD: 'Moldova',
      ME: 'Montenegro',
      MK: 'Macedonia',
      MT: 'Malta',
      NL: 'Netherlands',
      NO: 'Norway',
      PL: 'Poland',
      PT: 'Portugal',
      RO: 'Romania',
      RS: 'Serbia',
      SE: 'Sweden',
      SI: 'Slovenia',
      SK: 'Slovakia',
      SM: 'San Marino',
      UA: 'Ukraine',
      VA: 'Holy See (Vatican City State)',
    },
  },
  // Latin America and the Caribbean
  lac: {
    countries: {
      AG: 'Antigua and Barbuda',
      AI: 'Anguilla',
      AN: 'Netherlands Antilles',
      AR: 'Argentina',
      AW: 'Aruba',
      BB: 'Barbados',
      BM: 'Bermuda',
      BO: 'Bolivia',
      BR: 'Brazil',
      BS: 'Bahamas',
      BZ: 'Belize',
      CL: 'Chile',
      CO: 'Colombia',
      CR: 'Costa Rica',
      CU: 'Cuba',
      DM: 'Dominica',
      DO: 'Dominican Republic',
      EC: 'Ecuador',
      GD: 'Grenada',
      GP: 'Guadeloupe',
      GT: 'Guatemala',
      GY: 'Guyana',
      HN: 'Honduras',
      HT: 'Haiti',
      JM: 'Jamaica',
      KN: 'Saint Kitts and Nevis',
      KY: 'Cayman Islands',
      LC: 'Saint Lucia',
      MQ: 'Martinique',
      MS: 'Montserrat',
      MX: 'Mexico',
      NI: 'Nicaragua',
      PA: 'Panama',
      PE: 'Peru',
      PR: 'Puerto Rico',
      PY: 'Paraguay',
      SR: 'Suriname',
      SV: 'El Salvador',
      TC: 'Turks and Caicos Islands',
      TT: 'Trinidad and Tobago',
      UY: 'Uruguay, Eastern Republic of',
      VC: 'Saint Vincent and Grenadines',
      VE: 'Venezuela',
      VG: 'British Virgin Islands',
      VI: 'United States Virgin Islands',
    },
  },
  // Middle East and North Africa
  mena: {
    countries: {
      AE: 'United Arab Emirates',
      BH: 'Bahrain',
      DJ: 'Djibouti',
      DZ: 'Algeria',
      EG: 'Egypt',
      IL: 'Israel',
      IQ: 'Iraq',
      IR: 'Iran',
      JO: 'Jordan',
      KW: 'Kuwait',
      LB: 'Lebanon',
      LY: 'Libyan Arab Jamahiriya',
      MA: 'Morocco',
      OM: 'Oman',
      PS: 'Palestinian Territory',
      QA: 'Qatar',
      SA: 'Saudi Arabia',
      SY: 'Syrian Arab Republic',
      TN: 'Tunisia',
      YE: 'Yemen',
    },
  },
  // North America
  na: {
    countries: {
      CA: 'Canada',
      US: 'United States of America',
    },
  },
  // Australia and Oceania
  oc: {
    countries: {
      AS: 'American Samoa',
      AU: 'Australia',
      CK: 'Cook Islands',
      FJ: 'Fiji Fiji Islands',
      FM: 'Micronesia',
      GU: 'Guam',
      KI: 'Kiribati',
      MH: 'Marshall Islands',
      NC: 'New Caledonia',
      NR: 'Nauru',
      NZ: 'New Zealand',
      PF: 'French Polynesia',
      PG: 'Papua New Guinea',
      PW: 'Palau',
      SB: 'Solomon Islands',
      TL: 'Timor-Leste',
      TO: 'Tonga',
      TV: 'Tuvalu',
      VU: 'Vanuatu',
      WS: 'Samoa',
    },
  },
  // South Asia
  sar: {
    countries: {
      AF: 'Afghanistan',
      BD: 'Bangladesh',
      BT: 'Bhutan',
      IN: 'India',
      LK: 'Sri Lanka',
      MV: 'Maldives',
      NP: 'Nepal',
      PK: 'Pakistan',
    },
  },
};

const regions = (): Array<string> => (
  Object.keys(worldBankRegions)
);

const regionName = (region: string, locale: string = 'en-GB'): string => {
  const regionNames = {
    'en-GB': {
      afr: 'Africa',
      cas: 'Central Asia',
      eap: 'East Asia & Pacific',
      eur: 'Europe',
      lac: 'Latin America & Caribbean',
      mena: 'Middle East & North Africa',
      na: 'North America',
      oc: 'Oceania',
      sar: 'South Asia',
    },
  };
  if (regionNames[locale]) {
    return regionNames[locale][region] || null;
  }
  return region;
};

const countriesInRegion = (region: string): Region => (
  worldBankRegions[region] ? worldBankRegions[region].countries : {}
);

const countryCodesInRegion = (region: string): Array<string> => (
  Object.keys(countriesInRegion(region))
);

const countryNamesInRegion = (region: string): Array<string> => (
  Object.values(countriesInRegion(region))
);

module.exports = {
  regions,
  regionName,
  countriesInRegion,
  countryCodesInRegion,
  countryNamesInRegion,
};
