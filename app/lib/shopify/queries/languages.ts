import type { I18nBase, Storefront } from '@shopify/hydrogen';
import type { CountryCode } from '@shopify/hydrogen/storefront-api-types';
import type {
  DefaultLanguageQuery,
  LanguagesQuery,
} from 'storefrontapi.generated';

import { Cache3Hours } from '~/lib/remix-server/cache/constants';

const LANGUAGES_QUERY = `#graphql
query Languages(
    $country: CountryCode
    $language: LanguageCode
)@inContext(country: $country, language: $language) {
    localization {
        availableLanguages {
            name
            isoCode
            endonymName
        }
    }
}
`;

const DEFAULT_LANGUAGE_QUERY = `#graphql
query DefaultLanguage(
    $country: CountryCode
)@inContext(country: $country) {
    localization {
        language {
            isoCode
            endonymName
        }
        availableLanguages {
            name
            isoCode
            endonymName
        }
    }
}
`;

/**
 * Fetches the list of supported languages for a given locale.
 *
 * @param {Storefront} storefront - The storefront instance used to make the query.
 * @param {I18nBase} locale - An object containing locale information, such as country and language.
 * @returns {Promise<Array>} A promise that resolves to an array of supported languages available for the locale.
 */
export const getSupportedLanguages = (
  storefront: Storefront,
  locale: I18nBase,
): Promise<LanguagesQuery['localization']['availableLanguages']> => {
  return storefront
    .query<LanguagesQuery>(LANGUAGES_QUERY, {
      cache: Cache3Hours,
      variables: {
        country: locale.country,
        language: locale.language,
      },
    })
    .then((data) => data?.localization?.availableLanguages);
};

export const getDefaultLanguage = (
  storefront: Storefront,
  country: CountryCode,
) => {
  return storefront
    .query<DefaultLanguageQuery>(DEFAULT_LANGUAGE_QUERY, {
      cache: Cache3Hours,
      variables: {
        country,
      },
    })
    .then((data) => data?.localization?.language);
};
