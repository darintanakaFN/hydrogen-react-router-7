export const VARIANT_SKU_BY_ID_QUERY = `#graphql
query ProductVariant($id: ID!) {
    node(id: $id) {
        ... on ProductVariant {
            sku
        }
    }
}
` as const;
