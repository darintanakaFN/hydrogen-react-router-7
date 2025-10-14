import type { Storefront, createWithCache } from '@shopify/hydrogen';
import type {
  CollectionQuery,
  CollectionQueryVariables,
} from 'storefrontapi.generated';

import { IMAGE_FRAGMENT } from '~/graphql/shopify/fragments/image';
import { Cache3Hours } from '~/lib/remix-server/cache/constants';
import { runWithCache } from '~/lib/remix-server/cache/runWithCache';
import type { NestedOmit } from '~/utils/typescript';

const COLLECTION_QUERY = `#graphql
query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
        id
        handle
        title
        description
        descriptionHtml
        image {
            ...Image
        }
        seo {
            title
            description
        }
        subCollectionMenu: metafield(
            namespace: "global"
            key: "sub_collection_menu"
        ) {
            namespace
            key
            value
        }
        descriptionSeoTag: metafield(namespace: "global", key: "description_tag") {
            key
            value
        }
        titleSeoTag: metafield(namespace: "global", key: "title_tag") {
            key
            value
        }
        trending: metafield(
            namespace: "custom"
            key: "collection_trending"
        ) {
            key
            value
        }
        category: metafield(namespace: "custom", key: "category") {
            namespace
            key
            value
        }
        shop_by: metafield(namespace: "custom", key: "shop_by") {
            namespace
            key
            value
        }
        showEmptyInventory: metafield(namespace: "custom", key: "show_0_inventory_items") {
            namespace
            key
            value
        }
        noIndex: metafield(namespace: "seo", key: "no_index") {
          value
        }
    }
}
${IMAGE_FRAGMENT}
` as const;

export type FormattedCollectionQuery = NestedOmit<
  CollectionQuery,
  'collection.trending'
> & {
  collection: {
    trending?: boolean;
  };
};

export const getCollection = async (
  storefront: Storefront,
  variables: CollectionQueryVariables,
  withCache: ReturnType<typeof createWithCache>,
): Promise<FormattedCollectionQuery | undefined> => {
  const getCollection = () =>
    storefront
      .query(COLLECTION_QUERY, {
        displayName: `Shopify: Collection-${variables.handle}-${variables.language}-${variables.country}`,
        variables,
      })
      .then(
        (queryRes: CollectionQuery): FormattedCollectionQuery | undefined => {
          if (!queryRes.collection) return undefined;

          return {
            ...queryRes,
            collection: {
              ...queryRes.collection,
              trending: queryRes.collection.trending?.value === 'true',
            },
          };
        },
      );

  return runWithCache({
    withCache,
    options: {
      cacheKey: ['collection', variables],
      cacheStrategy: Cache3Hours,
      shouldCacheResult: (result) => !!result,
    },
    displayName: `Shopify: Collection-${variables.handle}-${variables.language}-${variables.country}`,
    callback: getCollection,
  });
};
