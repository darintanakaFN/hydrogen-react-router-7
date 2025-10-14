import {PRODUCT_OPTIONS_FRAGMENT} from "~/lib/shopify/fragments/productOptions";
import {MONEY_FRAGMENT} from "~/lib/shopify/fragments/money";


export const ORDER_FRAGMENT = `#graphql
${PRODUCT_OPTIONS_FRAGMENT}
${MONEY_FRAGMENT}
fragment Order on Order {
    originalTotalPrice {
        ...Money
    }
    subtotalPrice {
        ...Money
    }
    originalTotalDuties {
        ...Money
    }
    totalTax {
        ...Money
    }
    discountApplications(first: 1) {
        nodes {
            value {
                __typename
                ... on MoneyV2 {
                    ...Money
                }
                ... on PricingPercentageValue {
                    percentage
                }
            }
        }
    }
    totalShippingPrice {
        ...Money
    }
    totalRefunded {
        ...Money
    }
    fulfillmentStatus
    lineItems(first: 25) {
        nodes {
            title
            quantity
            originalTotalPrice {
                ...Money
            }
            discountedTotalPrice {
                ...Money
            }
            variant {
                id
                title,
                product {
                    handle
                    options {
                        ...ProductOptions
                    }
                }
                selectedOptions {
                    name
                    value
                }
                image {
                    altText
                    url
                }
            }
        }
    }
    shippingAddress {
        formatted
        name
    }
    billingAddress {
        formatted
        name
    }
    processedAt
    cancelReason
    name
    id
    customAttributes {
        key
        value
    }
}
`;
