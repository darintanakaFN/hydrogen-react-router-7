import type { Storefront } from '@shopify/hydrogen';
import type { OrderQueryVariables } from 'storefrontapi.generated';

import { ORDER_FRAGMENT } from '~/graphql/shopify/fragments/order';
import { Cache3Hours } from '~/lib/remix-server/cache/constants';
import { formatOrder } from '~/utils/formatOrder/formatOrder';
import type { FormattedOrder } from '~/utils/formatOrder/order';

export const ORDER_QUERY = `#graphql
${ORDER_FRAGMENT}
query Order(
    $country: CountryCode
    $language: LanguageCode
    $orderId: ID!
) @inContext(country: $country, language: $language) {
    order: node(id: $orderId) {
        ... on Order {
            ...Order
        }
    }
}
` as const;

export const getOrder = async (
  storefront: Storefront,
  variables: OrderQueryVariables,
): Promise<FormattedOrder | undefined> => {
  return storefront
    .query(ORDER_QUERY, {
      displayName: `Shopify: OrderQuery[${variables.orderId}]`,
      cache: Cache3Hours,
      variables,
    })
    .then(({ order }) => {
      if (!order) return undefined;
      return formatOrder(order);
    });
};
