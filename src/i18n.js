// @flow

export const defaultLocale: string = 'en-GB';

type RegionI18n = Map<string, string>;
type RegionI18nMap = Map<string, RegionI18n>;

export const regionNames: RegionI18nMap = new Map([
  ['afr', new Map([
    ['en-GB', 'Africa'],
  ])],
  ['cas', new Map([
    ['en-GB', 'Central Asia'],
  ])],
  ['eap', new Map([
    ['en-GB', 'East Asia & Pacific'],
  ])],
  ['eur', new Map([
    ['en-GB', 'Europe'],
  ])],
  ['lac', new Map([
    ['en-GB', 'Latin America & Caribbean'],
  ])],
  ['mena', new Map([
    ['en-GB', 'Middle East & North Africa'],
  ])],
  ['na', new Map([
    ['en-GB', 'North America'],
  ])],
  ['oc', new Map([
    ['en-GB', 'Oceania'],
  ])],
  ['sar', new Map([
    ['en-GB', 'South Asia'],
  ])],
]);
