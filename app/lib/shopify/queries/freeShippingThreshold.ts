import type { Storefront } from '@shopify/hydrogen';
import type {
  CurrencyCode,
  MoneyV2,
} from '@shopify/hydrogen/storefront-api-types';
import type { FreeShippingThresholdQueryVariables } from 'storefrontapi.generated';

import { Cache3Hours } from '~/lib/remix-server/cache/constants';

const FREE_SHIPPING_THRESHOLD_QUERY = `#graphql
query FreeShippingThreshold($country: CountryCode = US) @inContext(country: $country) {
  metaobjects(first: 100, type: "freeShippingThreshold") {
    nodes {
      defaultThreshold: field(key: "worldwideDefaultThreshold") {
        value
      }
      countryCode: field(key: "countryCode") {
        value
      }
      usdThreshold: field(key: "usdThreshold") {
        value
      }
      threshold: field(key: "threshold") {
        value
      }
      currencyCode: field(key: "currencyCode") {
        value
      }
    }
  }
}
`;

export interface FreeShippingThreshold {
  default: MoneyV2;
  US: MoneyV2;
  CA: MoneyV2;
  [countryCode: string]: MoneyV2;
}

interface MetaObjectMoney {
  amount: string;
  currency_code: CurrencyCode;
}

export const getFreeShippingThreshold = async (
  storefront: Storefront,
  variables: FreeShippingThresholdQueryVariables,
): Promise<FreeShippingThreshold | undefined> => {
  return storefront
    .query(FREE_SHIPPING_THRESHOLD_QUERY, {
      displayName: `Shopify: FreeShippingThresholdQuery[${variables.country}]`,
      variables: { country: variables.country },
      cache: Cache3Hours,
    })
    .then((result) => {
      if (!result.metaobjects || result.metaobjects.nodes.length === 0) {
        return undefined;
      }
      const thresholdData: FreeShippingThreshold = {} as FreeShippingThreshold;
      result.metaobjects.nodes.forEach((item) => {
        if (
          item.defaultThreshold?.value === 'true' &&
          item.usdThreshold?.value
        ) {
          const parsedMoney = JSON.parse(
            item.usdThreshold.value,
          ) as MetaObjectMoney;

          thresholdData.default = {
            amount: parsedMoney.amount,
            currencyCode: parsedMoney.currency_code,
          };
          return;
        }

        if (
          item.threshold?.value &&
          item.currencyCode?.value &&
          item.countryCode?.value
        ) {
          thresholdData[item.countryCode.value.toLocaleUpperCase()] = {
            amount: item.threshold.value,
            currencyCode: item.currencyCode.value,
          } as MoneyV2;
          return;
        }

        if (item.usdThreshold?.value && item.countryCode?.value) {
          const parsedMoney = JSON.parse(
            item.usdThreshold.value,
          ) as MetaObjectMoney;
          thresholdData[item.countryCode.value.toLocaleUpperCase()] = {
            amount: parsedMoney.amount,
            currencyCode: parsedMoney.currency_code,
          } as MoneyV2;
        }
      });
      return thresholdData;
    });
};
