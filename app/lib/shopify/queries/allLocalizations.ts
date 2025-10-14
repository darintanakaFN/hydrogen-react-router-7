import type { Storefront } from '@shopify/hydrogen';
import type { CountryCode } from '@shopify/hydrogen/storefront-api-types';

import { Cache1Day } from '~/lib/remix-server/cache/constants';
import {
  type CountryInfo,
  countriesWithSpanishDefaultLanguage,
} from '~/utils/country';

export const ALL_LOCALIZATIONS_QUERY = `#graphql
query AllLocalizations($language: LanguageCode) @inContext(language: $language) {
    localization {
        availableCountries {
            isoCode
            name
            market {
                handle
            }
            currency {
                isoCode
                symbol
            }
            availableLanguages {
                isoCode
            }
        }
    }
}
` as const;

function getOverrideProps(countryKey: CountryCode): Partial<CountryInfo> {
  const overrides: { [key in CountryCode]?: Partial<CountryInfo> } = {
    ZZ: {
      name: 'International',
      countryCode: 'ZZ',
      symbol: '$',
      currency: 'USD',
      flag: '',
    },
  };

  return overrides[countryKey] || {};
}

export const getAvailableCountries = async (
  storefront: Storefront,
): Promise<CountryInfo[]> => {
  const { localization } = await storefront.query(ALL_LOCALIZATIONS_QUERY, {
    cache: Cache1Day,
  });

  const countries = localization.availableCountries.reduce(
    (acc: { [countryCode: string]: CountryInfo }, val) => {
      const market = val.market?.handle.toLowerCase();
      let countryKey: CountryCode = val.isoCode;

      if (market === 'international') {
        countryKey = 'ZZ';
      }

      const overrideProps = getOverrideProps(countryKey);

      acc[countryKey] = {
        name: val.name,
        languageCode: val.availableLanguages.map((l) => l.isoCode),
        defaultLanguageCode: countriesWithSpanishDefaultLanguage.includes(
          val.isoCode,
        )
          ? 'ES'
          : val.availableLanguages[0].isoCode,
        countryCode: val.isoCode,
        flag: val.isoCode,
        symbol: val.currency.symbol,
        currency: val.currency.isoCode,
        ...overrideProps,
      };

      return acc;
    },
    {} as { [countryCode: string]: CountryInfo },
  );

  return Object.values(countries);
};
