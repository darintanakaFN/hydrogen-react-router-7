import {CART_LINE_PRODUCT} from "~/lib/shopify/fragments/cartLineProduct";
import {MONEY_FRAGMENT} from "~/lib/shopify/fragments/money";


export const CART_LINE_FRAGMENT = `#graphql
${CART_LINE_PRODUCT}
${MONEY_FRAGMENT}
fragment CartLine on CartLine {
    id
    quantity
    attributes {
        key
        value
    }
    cost {
        totalAmount {
            ...Money
        }
        amountPerQuantity {
            ...Money
        }
        compareAtAmountPerQuantity {
            ...Money
        }
    }
    discountAllocations {
        ... on CartAutomaticDiscountAllocation {
            __typename
            title
            discountApplication {
                allocationMethod
                targetSelection
                targetType
                value {
                    ... on MoneyV2 {
                    amount
                    currencyCode
                    }
                    ... on PricingPercentageValue {
                    percentage
                    }
                }
            }
            discountedAmount {
                ...Money
            }
            targetType
        }
        ... on CartCodeDiscountAllocation {
            __typename
            code
            discountApplication {
                allocationMethod
                targetSelection
                targetType
                value {
                    ... on MoneyV2 {
                    amount
                    currencyCode
                    }
                    ... on PricingPercentageValue {
                    percentage
                    }
                }
            }
            discountedAmount {
                ...Money
            }
        }
        ... on CartCustomDiscountAllocation {
            __typename
            title
            discountApplication {
                allocationMethod
                targetSelection
                targetType
                value {
                    ... on MoneyV2 {
                    amount
                    currencyCode
                    }
                    ... on PricingPercentageValue {
                    percentage
                    }
                }
            }
            discountedAmount {
                ...Money
            }
        }
    }
    merchandise {
        ... on ProductVariant {
            id
            quantityAvailable # TODO: remove this field since we don't want to expose it on client side
            availableForSale
            compareAtPrice {
                ...Money
            }
            price {
                ...Money
            }
            requiresShipping
            title
            image {
                id
                url
                altText
                width
                height

            }
            product {
                ...CartLineProduct
            }
            selectedOptions {
                name
                value
            }
        }
    }
}
` as const;
