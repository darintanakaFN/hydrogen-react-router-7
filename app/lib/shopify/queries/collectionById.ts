export type CollectionInfo =
  | {
      title: string;
      handle: string;
    }
  | undefined;

export const COLLECTION_BY_ID_QUERY = `#graphql
query CollectionById(
    $id: ID!,
    $country: CountryCode
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    collection(id: $id) {
        id
        title
        handle
        trending: metafield(
            namespace: "custom"
            key: "collection_trending"
        ) {
            key
            value
        }
    }
}
` as const;
