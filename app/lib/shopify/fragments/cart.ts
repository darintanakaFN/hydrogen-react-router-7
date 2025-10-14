import {CART_LINE_FRAGMENT} from "~/lib/shopify/fragments/cartLine";

export const CART_QUERY_FRAGMENT = `#graphql
${CART_LINE_FRAGMENT}
fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
        countryCode
        customer {
            id
            email
            firstName
            lastName
            displayName
            tags
        }
        email
        phone
    }
    lines(first: $numCartLines) {
        nodes {
            ...CartLine
        }
    }
    cost {
        subtotalAmount {
            ...Money
        }
        totalAmount {
            ...Money
        }
        totalDutyAmount {
            ...Money
        }
        totalTaxAmount {
            ...Money
        }
    }
    note
    attributes {
        key
        value
    }
    discountCodes {
        code
        applicable
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
          currencyCode
          amount
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
          currencyCode
          amount
        }
        targetType
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
          currencyCode
          amount
        }
        targetType
      }
    }
    updatedAt
    deliveryGroups(first: 1) {
      nodes {
        selectedDeliveryOption {
          estimatedCost {
            amount
            currencyCode
          }
        }
      }
    }
}

` as const;

export const CART_MUTATE_FRAGMENT = `#graphql
${CART_LINE_FRAGMENT}
fragment CartApiMutation on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
        countryCode
        customer {
            id
            email
            firstName
            lastName
            displayName
            tags
        }
        email
        phone
    }
    lines(first: 100) {
        nodes {
            ...CartLine
        }
    }
    cost {
        subtotalAmount {
            ...Money
        }
        totalAmount {
            ...Money
        }
        totalDutyAmount {
            ...Money
        }
        totalTaxAmount {
            ...Money
        }
    }
    note
    attributes {
        key
        value
    }
    discountCodes {
        code
        applicable
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
          currencyCode
          amount
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
          currencyCode
          amount
        }
        targetType
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
          currencyCode
          amount
        }
        targetType
      }
    }
    deliveryGroups(first: 1) {
      nodes {
        selectedDeliveryOption {
          handle
          estimatedCost {
            amount
            currencyCode
          }
        }
      }
    }
}

` as const;
