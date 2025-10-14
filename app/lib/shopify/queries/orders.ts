import type { Storefront } from '@shopify/hydrogen';
import type { PageInfo } from '@shopify/hydrogen/storefront-api-types';
import type { AllCustomerOrdersQueryVariables } from 'storefrontapi.generated';

import { ORDERS_FRAGMENT } from '~/graphql/shopify/fragments/orders';
import { Cache1Minute } from '~/lib/remix-server/cache/constants';
import { formatOrder } from '~/utils/formatOrder/formatOrder';
import type { FormattedOrder } from '~/utils/formatOrder/order';
import { Logger } from '~/utils/logger/logger';

export const ORDERS_QUERY = `#graphql
${ORDERS_FRAGMENT}
query AllCustomerOrders (
    $country: CountryCode
    $customerAccessToken: String!
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
        ...Orders
    }
}
`;

export type GetOrdersResponse = {
  orders: FormattedOrder[];
  pageInfo: PageInfo;
};

export const getOrders = async (
  storefront: Storefront,
  variables: AllCustomerOrdersQueryVariables,
): Promise<GetOrdersResponse | undefined> => {
  return storefront
    .query(ORDERS_QUERY, {
      displayName: 'Shopify: OrdersQuery',
      cache: Cache1Minute,
      variables,
    })
    .then(async ({ customer }) => {
      if (!customer) return undefined;
      return {
        orders: customer.orders.nodes.map(formatOrder),
        pageInfo: customer.orders.pageInfo,
      };
    })
    .catch((error) => {
      Logger.error('getOrders error:', error);
      return {
        orders: [],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: null,
          endCursor: null,
        },
      };
    });
};
