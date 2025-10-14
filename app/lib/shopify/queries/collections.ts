import { COLLECTION_FRAGMENT } from '~/graphql/shopify/fragments/collection';

export const COLLECTIONS_QUERY = `#graphql
${COLLECTION_FRAGMENT}
query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
) @inContext(country: $country, language: $language) {
    collections(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
    ) {
        nodes {
            ...Collection
        }
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
    }
}
` as const;
