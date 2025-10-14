import { MONEY_FRAGMENT } from './money';
import {PRODUCT_VARIANT_FRAGMENT} from "~/lib/shopify/fragments/productVariant";
import {PRODUCT_OPTIONS_FRAGMENT} from "~/lib/shopify/fragments/productOptions";

export const PRODUCT_FRAGMENT = `#graphql
fragment Product on Product {
    id
    title
    tags
    isGiftCard
    vendor
    handle
    descriptionHtml
    description
    productType
    publishedAt
    options {
        ...ProductOptions
    }
    availableForSale
    firstImage: featuredImage {
      ...Image
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariant
    }
    seo {
        description
        title
    }
    media(first: 20) {
        __typename
        edges {
            node {
                ... on MediaImage {
                    __typename
                    mediaContentType
                    alt
                    previewImage {
                        ...Image
                    }
                }
                ... on Video {
                    __typename
                    mediaContentType
                    alt
                    previewImage {
                        ...Image
                    }
                    sources {
                        url
                        format
                        height
                        width
                        mimeType
                    }
                }
            }
        }
    }
    variants(first: 250) {
        nodes {
            ...ProductVariant
        }
    }
    kits: metafield(namespace: "linked_kits", key: "kits") {
        id
        value
    }
    swatches: metafield(namespace: "linked_products", key: "swatches") {
        id
        value
    }
    fits: metafield(namespace: "products", key: "family_products") {
        id
        value
    }
    relatedCollections: metafield(namespace: "collection", key: "related_collections") {
        id
        value
    }
    newAndImprovedMessage: metafield(namespace: "custom", key: "new_improved_message") {
        id
        value
    }
    newAndImprovedDate: metafield(namespace: "custom", key: "new_improved_date") {
        id
        value
    }
    priceWithCode: metafield(namespace: "custom", key: "price_with_code") {
        id
        value
    }
    metafields(identifiers: [{namespace: "collection", key: "handle"}, {namespace: "collection", key: "name"}] ) {
        namespace
        value
        key
        id
    }
    aiReviewInfo: metafield(namespace: "custom", key: "review_summary") {
        value
    }  
    priceRange {
        minVariantPrice {
            ...Money
        }
        maxVariantPrice {
            ...Money
        }
    }
}
${MONEY_FRAGMENT}
${PRODUCT_VARIANT_FRAGMENT}
${PRODUCT_OPTIONS_FRAGMENT}
` as const;
