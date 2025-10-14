import type { Storefront } from '@shopify/hydrogen';
import type {
  VertexProductsAdditionalDataQuery,
  VertexProductsAdditionalDataQueryVariables,
} from 'storefrontapi.generated';

import { MONEY_FRAGMENT } from '~/graphql/shopify/fragments/money';
import { Cache1Minute } from '~/lib/remix-server/cache/constants';
import { Logger } from '~/utils/logger/logger';

export const VERTEX_PRODUCT_ADDITIONAL_DATA_QUERY = `#graphql
${MONEY_FRAGMENT}
query VertexProductsAdditionalData(
    $productIds: [ID!]!
    $country: CountryCode
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    nodes(ids: $productIds) {
        ... on Product {
            id
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
            variants (first: 200) {
                nodes {
                    id
                    quantityAvailable
                    availableForSale
                    price {
                        ...Money
                    }
                    unitPrice {
                        ...Money
                    }
                    compareAtPrice {
                        ...Money
                    }
                    sku
                    title
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

export const getVertexProductsAdditionalData = async (
  storefront: Storefront,
  variables: VertexProductsAdditionalDataQueryVariables,
): Promise<VertexProductsAdditionalDataQuery['nodes']> => {
  return storefront
    .query(VERTEX_PRODUCT_ADDITIONAL_DATA_QUERY, {
      displayName: `Shopify: VertexProductsAdditionalDataQuery`,
      cache: Cache1Minute,
      variables: {
        ...variables,
        productIds: Array.isArray(variables.productIds)
          ? // we sort it so we can cache it
            variables.productIds.sort()
          : variables.productIds,
      },
    })
    .then(({ nodes }: VertexProductsAdditionalDataQuery) => {
      return nodes;
    })
    .catch((error) => {
      Logger.error('Error fetching vertex product additional data: ', error);
      return [];
    });
};
