import {ORDER_FRAGMENT} from "~/lib/shopify/fragments/order";

export const ORDERS_FRAGMENT = `#graphql
${ORDER_FRAGMENT}
fragment Orders on Customer {
    orders(
        sortKey: PROCESSED_AT,
        reverse: true,
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor,
    ) {
        nodes {
            ...Order
        }
        pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
        }
    }
}
`;
