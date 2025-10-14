import {PRODUCT_VARIANT_FRAGMENT} from "~/lib/shopify/fragments/productVariant";
import {PRODUCT_OPTIONS_FRAGMENT} from "~/lib/shopify/fragments/productOptions";

export const CART_LINE_PRODUCT = `#graphql
${PRODUCT_VARIANT_FRAGMENT}
${PRODUCT_OPTIONS_FRAGMENT}
fragment CartLineProduct on Product {
    priceRange {
        maxVariantPrice {
            amount
            currencyCode
        }
        minVariantPrice {
            amount
            currencyCode
        }
    }
    handle
    id
    title
    tags
    isGiftCard
    vendor
    handle
    productType
    descriptionHtml
    description
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
    firstImage: featuredImage {
        ...Image
    }
    options {
        ...ProductOptions
    }
    variants(first: 250) {
        nodes {
            ...ProductVariant
        }
    }
    swatches: metafield(namespace: "linked_products", key: "swatches") {
        id
        value
    }
    priceWithCode: metafield(namespace: "custom", key: "price_with_code") {
        id
        value
    }
    aiReviewInfo: metafield(namespace: "custom", key: "review_summary") {
        value
    }
}
` as const;
