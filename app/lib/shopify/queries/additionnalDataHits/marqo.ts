import type { Storefront } from '@shopify/hydrogen';
import type {
  MarqoProductsAdditionalDataQuery,
  MarqoProductsAdditionalDataQueryVariables,
} from 'storefrontapi.generated';

import { MONEY_FRAGMENT } from '~/graphql/shopify/fragments/money';
import { Cache1Minute } from '~/lib/remix-server/cache/constants';
import { Logger } from '~/utils/logger/logger';

export const MARQO_PRODUCTS_ADDITIONAL_DATA_QUERY = `#graphql
${MONEY_FRAGMENT}
query MarqoProductsAdditionalData(
    $productIds: [ID!]!
    $country: CountryCode
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    nodes(ids: $productIds) {
        ... on Product {
            tags
            handle
            priceRange {
                minVariantPrice {
                    ...Money
                }
                maxVariantPrice {
                    ...Money
                }
            }
            variants (first: 1) {
                nodes {
                    sku
                    price {
                        ...Money
                    }
                    compareAtPrice {
                        ...Money
                    }
                }
            }
            priceWithCode: metafield(namespace: "custom", key: "price_with_code") {
                id
                value
            }
        }
    }
}
` as const;

export const getMarqoProductsAdditionalData = async (
  storefront: Storefront,
  variables: MarqoProductsAdditionalDataQueryVariables,
): Promise<MarqoProductsAdditionalDataQuery['nodes']> => {
  return storefront
    .query(MARQO_PRODUCTS_ADDITIONAL_DATA_QUERY, {
      displayName: `Shopify: ProductsAdditionalDataQuery`,
      cache: Cache1Minute,
      variables: {
        ...variables,
        productIds: Array.isArray(variables.productIds)
          ? // we sort it so we can cache it
            variables.productIds.sort()
          : variables.productIds,
      },
    })
    .then(({ nodes }: MarqoProductsAdditionalDataQuery) => {
      return nodes;
    })
    .catch((error) => {
      Logger.error('Error fetching product prices by id: ', error);
      return [];
    });
};
