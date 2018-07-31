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

  it('provides a list of countries in a region', () => {
    expect(countriesInRegion('na')).to.eql({
      CA: 'Canada',
      US: 'United States of America',
    });
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

  it('provides an empty list for an invalid region', () => {
    expect(countryNamesInRegion('moon')).to.eql([]);
  });
});
