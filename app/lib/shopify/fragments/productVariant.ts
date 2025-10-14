import {IMAGE_FRAGMENT} from "@shopify/hydrogen";

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
fragment ProductVariant on ProductVariant {
    quantityAvailable
    availableForSale
    compareAtPrice {
        amount
        currencyCode
    }
    id
    image {
        ...Image
    }
    price {
        amount
        currencyCode
    }
    product {
        title
        handle
    }
    selectedOptions {
        name
        value
    }
    sku
    title
    unitPrice {
        amount
        currencyCode
    }
    isInactiveMetafield: metafield(namespace: "global", key: "inactive") {
        id
        value
    }
}
${IMAGE_FRAGMENT}
` as const;
