// @flow
const { expect } = require('./test-helper.js');

const {
  regions,
  countriesInRegion,
  countryCodesInRegion,
  countryNamesInRegion,
} = require('./index');

describe('region helper', () => {
  it('provides a list of available regions', () => {
    expect(regions()).to.eql([
      'afr',
      'cas',
      'eap',
      'eur',
      'lac',
      'mena',
      'na',
      'oc',
      'sar',
    ]);
  });

  it('provides a map of countries in a region', () => {
    expect(countriesInRegion('na')).to.eql(new Map([
      ['CA', 'Canada'],
      ['US', 'United States of America'],
    ]));
  });

  it('return X if asking for a non-existent region', () => {
    expect(countriesInRegion('moon')).to.eql(null);
  });

  it('provides a list of country codes in a region', () => {
    expect(countryCodesInRegion('sar')).to.eql([
      'AF',
      'BD',
      'BT',
      'IN',
      'LK',
      'MV',
      'NP',
      'PK',
    ]);
  });

  it('provides an empty list of codes for an invalid region', () => {
    expect(countryCodesInRegion('moon')).to.eql([]);
  });

  it('provides a list of country names in a region', () => {
    expect(countryNamesInRegion('cas')).to.eql([
      'Armenia',
      'Azerbaijan',
      'Georgia',
      'Kyrgyz Republic',
      'Kazakhstan',
      'Russian Federation',
      'Tajikistan',
      'Turkmenistan',
      'Turkey',
      'Uzbekistan',
    ]);
  });

  it('provides an empty list of names for an invalid region', () => {
    expect(countryNamesInRegion('moon')).to.eql([]);
  });
});
