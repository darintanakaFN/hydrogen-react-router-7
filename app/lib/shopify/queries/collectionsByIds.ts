import type { Storefront } from '@shopify/hydrogen';
import type {
  CountryCode,
  LanguageCode,
} from '@shopify/hydrogen-react/storefront-api-types';
import type {
  CollectionsByIdsQuery,
  ProductFragment,
} from 'storefrontapi.generated';

import { Cache3Hours } from '~/lib/remix-server/cache/constants';
import { parseGID } from '~/utils/formatProduct/formatToGID';
import { Logger } from '~/utils/logger/logger';

export const COLLECTIONS_BY_IDS_QUERY = `#graphql
query CollectionsByIds(
  $query: String!,
  $country: CountryCode,
  $language: LanguageCode,
  $first: Int!
) @inContext(country: $country, language: $language) {
  collections(first: $first, query: $query) {
    edges {
      node {   
        id
        title
        handle
      }
    }
  }
}
`;

export const getRelatedCollectionsFromMetafield = async (
  storefront: Storefront,
  relatedCollections: ProductFragment['relatedCollections'],
  countryCode?: CountryCode,
  languageCode?: LanguageCode,
): Promise<CollectionsByIdsQuery> => {
  const defaultResponse: CollectionsByIdsQuery = { collections: { edges: [] } };

  if (!relatedCollections?.value) return defaultResponse;

  try {
    const collectionIds = JSON.parse(relatedCollections.value) as string[];
    const parsedCollectionIds = collectionIds.map((id) => parseGID(id));
    const query = parsedCollectionIds.map((id) => `id:${id}`).join(' OR ');
    const first = Math.min(collectionIds.length, 5);

    try {
      return await storefront.query(COLLECTIONS_BY_IDS_QUERY, {
        displayName: 'Shopify: RelatedCollections-CollectionsIds',
        cache: Cache3Hours,
        variables: {
          query,
          country: countryCode,
          language: languageCode,
          first,
        },
      });
    } catch (error) {
      Logger.log('Error fetching collections by ids:', error);
      return defaultResponse;
    }
  } catch (error) {
    Logger.log('Error parsing related collections:', error);
    return defaultResponse;
  }
};
