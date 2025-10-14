import type { Storefront } from '@shopify/hydrogen';
import type { Page, PageInfo } from '@shopify/hydrogen/storefront-api-types';
import type { AllPagesQueryVariables } from 'storefrontapi.generated';

import { Cache3Hours } from '~/lib/remix-server/cache/constants';
import { Logger } from '~/utils/logger/logger';

export const PAGES_QUERY = `#graphql
query AllPages (
    $country: CountryCode
    $language: LanguageCode
    $query: String!
    $first: Int
) @inContext(country: $country, language: $language) {
    pages(query: $query, first: $first) {
      nodes {
        id
        onlineStoreUrl
        title
        handle
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
}
`;

export type GetPagesResponse = {
  pages: Pick<Page, 'id' | 'onlineStoreUrl' | 'title' | 'handle'>[];
  pageInfo: PageInfo;
};

export const getPagesQuery = async (
  storefront: Storefront,
  variables: AllPagesQueryVariables,
): Promise<GetPagesResponse | undefined> => {
  return storefront
    .query(PAGES_QUERY, {
      displayName: 'Shopify: PagesQuery',
      cache: Cache3Hours,
      variables,
    })
    .then(async ({ pages }) => {
      if (!pages) return undefined;
      return {
        pages: pages.nodes,
        pageInfo: pages.pageInfo,
      };
    })
    .catch((error) => {
      Logger.error('getPages error:', error);
      return {
        pages: [],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: null,
          endCursor: null,
        },
      };
    });
};
