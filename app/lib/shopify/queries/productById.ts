import type { Storefront } from '@shopify/hydrogen';
import type {
  ProductByIdQueryVariables,
  ProductFragment,
  ProductQuery,
  ProductsByIdsQuery,
  ProductsByIdsQueryVariables,
} from 'storefrontapi.generated';

import type { SanityProductData } from '~/graphql/sanity/queries/getSanityProductData';
import {
  PRODUCT_QUERY_BY_ID,
  PRODUCT_QUERY_BY_IDS,
} from '~/graphql/shopify/queries/product';
import { Cache1Minute } from '~/lib/remix-server/cache/constants';
import { formatProduct } from '~/utils/formatProduct/formatProduct';
import { formatProductOptions } from '~/utils/formatProduct/formatProductOptions';
import type { FormattedProduct } from '~/utils/formatProduct/product';
import { Logger } from '~/utils/logger/logger';

export const getProductById = async (
  storefront: Storefront,
  variables: ProductByIdQueryVariables,
  sanityData: SanityProductData,
): Promise<FormattedProduct | undefined> => {
  return storefront
    .query(PRODUCT_QUERY_BY_ID, {
      displayName: `Shopify: ProductQueryById[${variables.id}]`,
      cache: Cache1Minute,
      variables,
    })
    .then(({ product }: ProductQuery) => formatProduct({ product, sanityData }))
    .catch((error) => {
      Logger.error(
        `Error fetching product by id (id: ${variables.id}):`,
        error,
      );
      return undefined;
    });
};

export const getProductsByIds = async (
  storefront: Storefront,
  variables: ProductsByIdsQueryVariables,
  sanityData: SanityProductData,
): Promise<FormattedProduct[]> => {
  return storefront
    .query(PRODUCT_QUERY_BY_IDS, {
      displayName: `Shopify: ProductsByIds`,
      cache: Cache1Minute,
      variables,
    })
    .then(({ nodes }: ProductsByIdsQuery) => {
      return nodes.filter(Boolean).map((product) => {
        return {
          ...formatProduct({
            product: formatProductOptions(product),
            sanityData,
          }),
        };
      });
    })
    .catch((error) => {
      Logger.error('Error fetching products items by id: ', error);
      return [];
    });
};

export const getProductFragmentsById = async (
  storefront: Storefront,
  variables: ProductsByIdsQueryVariables,
): Promise<Array<ProductFragment>> => {
  return storefront
    .query(PRODUCT_QUERY_BY_IDS, {
      displayName: `Shopify: ProductsByIds`,
      cache: Cache1Minute,
      variables,
    })
    .then(({ nodes }: ProductsByIdsQuery) => {
      return nodes.filter(Boolean);
    })
    .catch((error) => {
      Logger.error('Error fetching products items by id: ', error);
      return [];
    });
};
