import {
  CacheNone,
  type Storefront,
  type createWithCache,
} from '@shopify/hydrogen';
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';
import type {
  ProductFragment,
  ProductIdByHandleQuery,
  ProductIdByHandleQueryVariables,
  ProductQuery,
  ProductQueryVariables,
} from 'storefrontapi.generated';

import type { SanityProductData } from '~/graphql/sanity/queries/getSanityProductData';
import {
  PRODUCT_QUERY,
  PRODUCT_QUERY_BY_HANDLE_NO_COUNTRY_CODE,
} from '~/graphql/shopify/queries/product';
import { Cache1Minute, Cache3Hours } from '~/lib/remix-server/cache/constants';
import { runWithCache } from '~/lib/remix-server/cache/runWithCache';
import { formatProduct } from '~/utils/formatProduct/formatProduct';
import type { FormattedProduct } from '~/utils/formatProduct/product';
import { Logger } from '~/utils/logger/logger';

export const getProductByHandle = async (
  storefront: Storefront,
  variables: ProductQueryVariables,
  sanityData: SanityProductData,
): Promise<FormattedProduct | undefined> => {
  return getProductFragmentByHandle(storefront, variables).then((product) =>
    product ? formatProduct({ product, sanityData }) : undefined,
  );
};

export const getProductFragmentByHandle = async (
  storefront: Storefront,
  variables: ProductQueryVariables,
): Promise<ProductFragment | null | undefined> => {
  return storefront
    .query(PRODUCT_QUERY, {
      cache: Cache1Minute,
      displayName: `Shopify: ProductQuery[${variables.handle}]`,
      variables,
    })
    .then(({ product }: ProductQuery) => product)
    .catch((error) => {
      if (Object.keys(error).length > 0) {
        Logger.error(
          `Error fetching product fragment by handle (handle: ${variables.handle}):`,
          error,
        );
      }
      return undefined;
    });
};

export const getProductIdTitleByHandle = async (
  storefront: Storefront,
  variables: ProductIdByHandleQueryVariables,
  withCache: ReturnType<typeof createWithCache>,
  language: StorefrontAPI.LanguageCode,
  country: StorefrontAPI.CountryCode,
): Promise<ProductIdByHandleQuery['product'] | null | undefined> => {
  const getProduct = async () => {
    return storefront
      .query<ProductIdByHandleQuery>(PRODUCT_QUERY_BY_HANDLE_NO_COUNTRY_CODE, {
        displayName: `Shopify: ProductQueryByHandleNoCountryCode[${variables.handle}-${language}-${country}]`,
        variables: { ...variables, cache: CacheNone },
      })
      .then(({ product }) => {
        return product;
      })
      .catch(() => {
        return undefined;
      });
  };
  return runWithCache({
    withCache,
    options: {
      cacheKey: [`ProductQueryByHandleNoCountryCode`, variables],
      cacheStrategy: Cache3Hours,
      shouldCacheResult: (result) => {
        return !!result;
      },
    },
    displayName: `Shopify: ProductQueryByHandleNoCountryCode[${variables.handle}-${language}-${country}]`,
    callback: getProduct,
  });
};
