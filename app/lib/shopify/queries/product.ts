import { PRODUCT_FRAGMENT } from '~/graphql/shopify/fragments/product';

export const PRODUCT_QUERY = `#graphql
query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
        ...Product
    }
}
${PRODUCT_FRAGMENT}
` as const;

export const PRODUCT_QUERY_BY_ID = `#graphql
query ProductById(
    $country: CountryCode
    $id: ID!
    $language: LanguageCode,
    $selectedOptions: [SelectedOptionInput!]!
) @inContext(country: $country, language: $language) {
    product(id: $id) {
        ...Product
    }
}
${PRODUCT_FRAGMENT}
` as const;

export const PRODUCT_QUERY_BY_HANDLE_NO_COUNTRY_CODE = `#graphql
query ProductIdByHandle($handle: String!){
  product(handle: $handle) {
    id
    title
    swatches: metafield(namespace: "linked_products", key: "swatches") {
        id
        value
    }
  }
}
`;

export const PRODUCT_QUERY_BY_IDS = `#graphql
query ProductsByIds(
    $country: CountryCode
    $productIds: [ID!]!
    $language: LanguageCode,
    $selectedOptions: [SelectedOptionInput!]!
) @inContext(country: $country, language: $language) {
    nodes(ids: $productIds) {
        ...Product
    }
}
${PRODUCT_FRAGMENT}
` as const;
