/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type CartApiQueryFragment = Pick<
  StorefrontAPI.Cart,
  'id' | 'checkoutUrl' | 'totalQuantity' | 'note' | 'updatedAt'
> & {
  buyerIdentity: Pick<
    StorefrontAPI.CartBuyerIdentity,
    'countryCode' | 'email' | 'phone'
  > & {
    customer?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Customer,
        'id' | 'email' | 'firstName' | 'lastName' | 'displayName' | 'tags'
      >
    >;
  };
  lines: {
    nodes: Array<
      Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
        attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
        cost: {
          totalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          amountPerQuantity: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
        };
        discountAllocations: Array<
          | ({__typename: 'CartAutomaticDiscountAllocation'} & Pick<
              StorefrontAPI.CartAutomaticDiscountAllocation,
              'title' | 'targetType'
            > & {
                discountApplication: Pick<
                  StorefrontAPI.CartDiscountApplication,
                  'allocationMethod' | 'targetSelection' | 'targetType'
                > & {
                  value:
                    | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                    | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
                };
                discountedAmount: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
              })
          | ({__typename: 'CartCodeDiscountAllocation'} & Pick<
              StorefrontAPI.CartCodeDiscountAllocation,
              'code'
            > & {
                discountApplication: Pick<
                  StorefrontAPI.CartDiscountApplication,
                  'allocationMethod' | 'targetSelection' | 'targetType'
                > & {
                  value:
                    | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                    | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
                };
                discountedAmount: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
              })
          | ({__typename: 'CartCustomDiscountAllocation'} & Pick<
              StorefrontAPI.CartCustomDiscountAllocation,
              'title'
            > & {
                discountApplication: Pick<
                  StorefrontAPI.CartDiscountApplication,
                  'allocationMethod' | 'targetSelection' | 'targetType'
                > & {
                  value:
                    | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                    | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
                };
                discountedAmount: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
              })
        >;
        merchandise: Pick<
          StorefrontAPI.ProductVariant,
          | 'id'
          | 'quantityAvailable'
          | 'availableForSale'
          | 'requiresShipping'
          | 'title'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          image?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >;
          product: Pick<
            StorefrontAPI.Product,
            | 'handle'
            | 'id'
            | 'title'
            | 'tags'
            | 'isGiftCard'
            | 'vendor'
            | 'productType'
            | 'descriptionHtml'
            | 'description'
          > & {
            priceRange: {
              maxVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              minVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
            };
            media: {__typename: 'MediaConnection'} & {
              edges: Array<{
                node:
                  | ({__typename: 'MediaImage'} & Pick<
                      StorefrontAPI.MediaImage,
                      'mediaContentType' | 'alt'
                    > & {
                        previewImage?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'id' | 'altText' | 'url' | 'width' | 'height'
                          >
                        >;
                      })
                  | ({__typename: 'Video'} & Pick<
                      StorefrontAPI.Video,
                      'mediaContentType' | 'alt'
                    > & {
                        previewImage?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'id' | 'altText' | 'url' | 'width' | 'height'
                          >
                        >;
                        sources: Array<
                          Pick<
                            StorefrontAPI.VideoSource,
                            'url' | 'format' | 'height' | 'width' | 'mimeType'
                          >
                        >;
                      });
              }>;
            };
            firstImage?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'id' | 'altText' | 'url' | 'width' | 'height'
              >
            >;
            options: Array<
              Pick<StorefrontAPI.ProductOption, 'name'> & {
                optionValues: Array<
                  Pick<StorefrontAPI.ProductOptionValue, 'name'>
                >;
              }
            >;
            variants: {
              nodes: Array<
                Pick<
                  StorefrontAPI.ProductVariant,
                  | 'quantityAvailable'
                  | 'availableForSale'
                  | 'id'
                  | 'sku'
                  | 'title'
                > & {
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
                  selectedOptions: Array<
                    Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                  >;
                  unitPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  isInactiveMetafield?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
                  >;
                }
              >;
            };
            swatches?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
            priceWithCode?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
            aiReviewInfo?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'value'>
            >;
          };
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
        };
      }
    >;
  };
  cost: {
    subtotalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    totalDutyAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
    >;
    totalTaxAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
    >;
  };
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  discountCodes: Array<
    Pick<StorefrontAPI.CartDiscountCode, 'code' | 'applicable'>
  >;
  discountAllocations: Array<
    | ({__typename: 'CartAutomaticDiscountAllocation'} & Pick<
        StorefrontAPI.CartAutomaticDiscountAllocation,
        'title' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
        })
    | ({__typename: 'CartCodeDiscountAllocation'} & Pick<
        StorefrontAPI.CartCodeDiscountAllocation,
        'code' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
        })
    | ({__typename: 'CartCustomDiscountAllocation'} & Pick<
        StorefrontAPI.CartCustomDiscountAllocation,
        'title' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
        })
  >;
  deliveryGroups: {
    nodes: Array<{
      selectedDeliveryOption?: StorefrontAPI.Maybe<{
        estimatedCost: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      }>;
    }>;
  };
};

export type CartApiMutationFragment = Pick<
  StorefrontAPI.Cart,
  'id' | 'checkoutUrl' | 'totalQuantity' | 'note'
> & {
  buyerIdentity: Pick<
    StorefrontAPI.CartBuyerIdentity,
    'countryCode' | 'email' | 'phone'
  > & {
    customer?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Customer,
        'id' | 'email' | 'firstName' | 'lastName' | 'displayName' | 'tags'
      >
    >;
  };
  lines: {
    nodes: Array<
      Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
        attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
        cost: {
          totalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          amountPerQuantity: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
        };
        discountAllocations: Array<
          | ({__typename: 'CartAutomaticDiscountAllocation'} & Pick<
              StorefrontAPI.CartAutomaticDiscountAllocation,
              'title' | 'targetType'
            > & {
                discountApplication: Pick<
                  StorefrontAPI.CartDiscountApplication,
                  'allocationMethod' | 'targetSelection' | 'targetType'
                > & {
                  value:
                    | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                    | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
                };
                discountedAmount: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
              })
          | ({__typename: 'CartCodeDiscountAllocation'} & Pick<
              StorefrontAPI.CartCodeDiscountAllocation,
              'code'
            > & {
                discountApplication: Pick<
                  StorefrontAPI.CartDiscountApplication,
                  'allocationMethod' | 'targetSelection' | 'targetType'
                > & {
                  value:
                    | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                    | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
                };
                discountedAmount: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
              })
          | ({__typename: 'CartCustomDiscountAllocation'} & Pick<
              StorefrontAPI.CartCustomDiscountAllocation,
              'title'
            > & {
                discountApplication: Pick<
                  StorefrontAPI.CartDiscountApplication,
                  'allocationMethod' | 'targetSelection' | 'targetType'
                > & {
                  value:
                    | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                    | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
                };
                discountedAmount: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
              })
        >;
        merchandise: Pick<
          StorefrontAPI.ProductVariant,
          | 'id'
          | 'quantityAvailable'
          | 'availableForSale'
          | 'requiresShipping'
          | 'title'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          image?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >;
          product: Pick<
            StorefrontAPI.Product,
            | 'handle'
            | 'id'
            | 'title'
            | 'tags'
            | 'isGiftCard'
            | 'vendor'
            | 'productType'
            | 'descriptionHtml'
            | 'description'
          > & {
            priceRange: {
              maxVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              minVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
            };
            media: {__typename: 'MediaConnection'} & {
              edges: Array<{
                node:
                  | ({__typename: 'MediaImage'} & Pick<
                      StorefrontAPI.MediaImage,
                      'mediaContentType' | 'alt'
                    > & {
                        previewImage?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'id' | 'altText' | 'url' | 'width' | 'height'
                          >
                        >;
                      })
                  | ({__typename: 'Video'} & Pick<
                      StorefrontAPI.Video,
                      'mediaContentType' | 'alt'
                    > & {
                        previewImage?: StorefrontAPI.Maybe<
                          {__typename: 'Image'} & Pick<
                            StorefrontAPI.Image,
                            'id' | 'altText' | 'url' | 'width' | 'height'
                          >
                        >;
                        sources: Array<
                          Pick<
                            StorefrontAPI.VideoSource,
                            'url' | 'format' | 'height' | 'width' | 'mimeType'
                          >
                        >;
                      });
              }>;
            };
            firstImage?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'id' | 'altText' | 'url' | 'width' | 'height'
              >
            >;
            options: Array<
              Pick<StorefrontAPI.ProductOption, 'name'> & {
                optionValues: Array<
                  Pick<StorefrontAPI.ProductOptionValue, 'name'>
                >;
              }
            >;
            variants: {
              nodes: Array<
                Pick<
                  StorefrontAPI.ProductVariant,
                  | 'quantityAvailable'
                  | 'availableForSale'
                  | 'id'
                  | 'sku'
                  | 'title'
                > & {
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  image?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
                  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
                  selectedOptions: Array<
                    Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                  >;
                  unitPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >;
                  isInactiveMetafield?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
                  >;
                }
              >;
            };
            swatches?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
            priceWithCode?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
            aiReviewInfo?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'value'>
            >;
          };
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
        };
      }
    >;
  };
  cost: {
    subtotalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    totalDutyAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
    >;
    totalTaxAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
    >;
  };
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  discountCodes: Array<
    Pick<StorefrontAPI.CartDiscountCode, 'code' | 'applicable'>
  >;
  discountAllocations: Array<
    | ({__typename: 'CartAutomaticDiscountAllocation'} & Pick<
        StorefrontAPI.CartAutomaticDiscountAllocation,
        'title' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
        })
    | ({__typename: 'CartCodeDiscountAllocation'} & Pick<
        StorefrontAPI.CartCodeDiscountAllocation,
        'code' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
        })
    | ({__typename: 'CartCustomDiscountAllocation'} & Pick<
        StorefrontAPI.CartCustomDiscountAllocation,
        'title' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
        })
  >;
  deliveryGroups: {
    nodes: Array<{
      selectedDeliveryOption?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.CartDeliveryOption, 'handle'> & {
          estimatedCost: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        }
      >;
    }>;
  };
};

export type CartLineFragment = Pick<
  StorefrontAPI.CartLine,
  'id' | 'quantity'
> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
    >;
  };
  discountAllocations: Array<
    | ({__typename: 'CartAutomaticDiscountAllocation'} & Pick<
        StorefrontAPI.CartAutomaticDiscountAllocation,
        'title' | 'targetType'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        })
    | ({__typename: 'CartCodeDiscountAllocation'} & Pick<
        StorefrontAPI.CartCodeDiscountAllocation,
        'code'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        })
    | ({__typename: 'CartCustomDiscountAllocation'} & Pick<
        StorefrontAPI.CartCustomDiscountAllocation,
        'title'
      > & {
          discountApplication: Pick<
            StorefrontAPI.CartDiscountApplication,
            'allocationMethod' | 'targetSelection' | 'targetType'
          > & {
            value:
              | Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              | Pick<StorefrontAPI.PricingPercentageValue, 'percentage'>;
          };
          discountedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        })
  >;
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    | 'id'
    | 'quantityAvailable'
    | 'availableForSale'
    | 'requiresShipping'
    | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
    >;
    price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >;
    product: Pick<
      StorefrontAPI.Product,
      | 'handle'
      | 'id'
      | 'title'
      | 'tags'
      | 'isGiftCard'
      | 'vendor'
      | 'productType'
      | 'descriptionHtml'
      | 'description'
    > & {
      priceRange: {
        maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
      media: {__typename: 'MediaConnection'} & {
        edges: Array<{
          node:
            | ({__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'mediaContentType' | 'alt'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                })
            | ({__typename: 'Video'} & Pick<
                StorefrontAPI.Video,
                'mediaContentType' | 'alt'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  sources: Array<
                    Pick<
                      StorefrontAPI.VideoSource,
                      'url' | 'format' | 'height' | 'width' | 'mimeType'
                    >
                  >;
                });
        }>;
      };
      firstImage?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'id' | 'altText' | 'url' | 'width' | 'height'
        >
      >;
      options: Array<
        Pick<StorefrontAPI.ProductOption, 'name'> & {
          optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>;
        }
      >;
      variants: {
        nodes: Array<
          Pick<
            StorefrontAPI.ProductVariant,
            'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'id' | 'altText' | 'url' | 'width' | 'height'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            isInactiveMetafield?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
          }
        >;
      };
      swatches?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      priceWithCode?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      aiReviewInfo?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'value'>
      >;
    };
    selectedOptions: Array<
      Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
    >;
  };
};

export type CartLineProductFragment = Pick<
  StorefrontAPI.Product,
  | 'handle'
  | 'id'
  | 'title'
  | 'tags'
  | 'isGiftCard'
  | 'vendor'
  | 'productType'
  | 'descriptionHtml'
  | 'description'
> & {
  priceRange: {
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
  media: {__typename: 'MediaConnection'} & {
    edges: Array<{
      node:
        | ({__typename: 'MediaImage'} & Pick<
            StorefrontAPI.MediaImage,
            'mediaContentType' | 'alt'
          > & {
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'id' | 'altText' | 'url' | 'width' | 'height'
                >
              >;
            })
        | ({__typename: 'Video'} & Pick<
            StorefrontAPI.Video,
            'mediaContentType' | 'alt'
          > & {
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'id' | 'altText' | 'url' | 'width' | 'height'
                >
              >;
              sources: Array<
                Pick<
                  StorefrontAPI.VideoSource,
                  'url' | 'format' | 'height' | 'width' | 'mimeType'
                >
              >;
            });
    }>;
  };
  firstImage?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'id' | 'altText' | 'url' | 'width' | 'height'
    >
  >;
  options: Array<
    Pick<StorefrontAPI.ProductOption, 'name'> & {
      optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>;
    }
  >;
  variants: {
    nodes: Array<
      Pick<
        StorefrontAPI.ProductVariant,
        'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
      > & {
        compareAtPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'id' | 'altText' | 'url' | 'width' | 'height'
          >
        >;
        price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
        selectedOptions: Array<
          Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
        >;
        unitPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        isInactiveMetafield?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
      }
    >;
  };
  swatches?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
  priceWithCode?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
  >;
  aiReviewInfo?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>;
};

export type CollectionFragment = Pick<
  StorefrontAPI.Collection,
  'id' | 'title' | 'handle'
> & {
  image?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'id' | 'altText' | 'url' | 'width' | 'height'
    >
  >;
};

export type CustomerFragment = Pick<
  StorefrontAPI.Customer,
  | 'id'
  | 'acceptsMarketing'
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'numberOfOrders'
  | 'phone'
> & {
  addresses: {
    nodes: Array<
      Pick<
        StorefrontAPI.MailingAddress,
        | 'id'
        | 'formatted'
        | 'firstName'
        | 'lastName'
        | 'company'
        | 'address1'
        | 'address2'
        | 'country'
        | 'province'
        | 'city'
        | 'zip'
        | 'phone'
      > & {countryCode: StorefrontAPI.MailingAddress['countryCodeV2']}
    >;
  };
  defaultAddress?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.MailingAddress,
      | 'id'
      | 'formatted'
      | 'firstName'
      | 'lastName'
      | 'company'
      | 'address1'
      | 'address2'
      | 'country'
      | 'province'
      | 'city'
      | 'zip'
      | 'phone'
    > & {countryCode: StorefrontAPI.MailingAddress['countryCodeV2']}
  >;
  vitals?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
};

export type AddressFragment = Pick<
  StorefrontAPI.MailingAddress,
  | 'id'
  | 'formatted'
  | 'firstName'
  | 'lastName'
  | 'company'
  | 'address1'
  | 'address2'
  | 'country'
  | 'province'
  | 'city'
  | 'zip'
  | 'phone'
> & {countryCode: StorefrontAPI.MailingAddress['countryCodeV2']};

export type ImageFragment = {__typename: 'Image'} & Pick<
  StorefrontAPI.Image,
  'id' | 'altText' | 'url' | 'width' | 'height'
>;

export type MoneyFragment = Pick<
  StorefrontAPI.MoneyV2,
  'amount' | 'currencyCode'
>;

export type OrderFragment = Pick<
  StorefrontAPI.Order,
  'fulfillmentStatus' | 'processedAt' | 'cancelReason' | 'name' | 'id'
> & {
  originalTotalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  subtotalPrice?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  originalTotalDuties?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  totalTax?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  discountApplications: {
    nodes: Array<{
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            StorefrontAPI.PricingPercentageValue,
            'percentage'
          >);
    }>;
  };
  totalShippingPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  totalRefunded: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  lineItems: {
    nodes: Array<
      Pick<StorefrontAPI.OrderLineItem, 'title' | 'quantity'> & {
        originalTotalPrice: Pick<
          StorefrontAPI.MoneyV2,
          'amount' | 'currencyCode'
        >;
        discountedTotalPrice: Pick<
          StorefrontAPI.MoneyV2,
          'amount' | 'currencyCode'
        >;
        variant?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
            product: Pick<StorefrontAPI.Product, 'handle'> & {
              options: Array<
                Pick<StorefrontAPI.ProductOption, 'name'> & {
                  optionValues: Array<
                    Pick<StorefrontAPI.ProductOptionValue, 'name'>
                  >;
                }
              >;
            };
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            image?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'altText' | 'url'>
            >;
          }
        >;
      }
    >;
  };
  shippingAddress?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
  >;
  billingAddress?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
  >;
  customAttributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
};

export type OrdersFragment = {
  orders: {
    nodes: Array<
      Pick<
        StorefrontAPI.Order,
        'fulfillmentStatus' | 'processedAt' | 'cancelReason' | 'name' | 'id'
      > & {
        originalTotalPrice: Pick<
          StorefrontAPI.MoneyV2,
          'amount' | 'currencyCode'
        >;
        subtotalPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        originalTotalDuties?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        totalTax?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        discountApplications: {
          nodes: Array<{
            value:
              | ({__typename: 'MoneyV2'} & Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >)
              | ({__typename: 'PricingPercentageValue'} & Pick<
                  StorefrontAPI.PricingPercentageValue,
                  'percentage'
                >);
          }>;
        };
        totalShippingPrice: Pick<
          StorefrontAPI.MoneyV2,
          'amount' | 'currencyCode'
        >;
        totalRefunded: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        lineItems: {
          nodes: Array<
            Pick<StorefrontAPI.OrderLineItem, 'title' | 'quantity'> & {
              originalTotalPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              discountedTotalPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              variant?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
                  product: Pick<StorefrontAPI.Product, 'handle'> & {
                    options: Array<
                      Pick<StorefrontAPI.ProductOption, 'name'> & {
                        optionValues: Array<
                          Pick<StorefrontAPI.ProductOptionValue, 'name'>
                        >;
                      }
                    >;
                  };
                  selectedOptions: Array<
                    Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                  >;
                  image?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Image, 'altText' | 'url'>
                  >;
                }
              >;
            }
          >;
        };
        shippingAddress?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
        >;
        billingAddress?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
        >;
        customAttributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
      }
    >;
    pageInfo: Pick<
      StorefrontAPI.PageInfo,
      'hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor'
    >;
  };
};

export type ProductFragment = Pick<
  StorefrontAPI.Product,
  | 'id'
  | 'title'
  | 'tags'
  | 'isGiftCard'
  | 'vendor'
  | 'handle'
  | 'descriptionHtml'
  | 'description'
  | 'productType'
  | 'publishedAt'
  | 'availableForSale'
> & {
  options: Array<
    Pick<StorefrontAPI.ProductOption, 'name'> & {
      optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>;
    }
  >;
  firstImage?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'id' | 'altText' | 'url' | 'width' | 'height'
    >
  >;
  selectedVariant?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.ProductVariant,
      'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
    > & {
      compareAtPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'id' | 'altText' | 'url' | 'width' | 'height'
        >
      >;
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
      selectedOptions: Array<
        Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
      >;
      unitPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      isInactiveMetafield?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
    }
  >;
  seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
  media: {__typename: 'MediaConnection'} & {
    edges: Array<{
      node:
        | ({__typename: 'MediaImage'} & Pick<
            StorefrontAPI.MediaImage,
            'mediaContentType' | 'alt'
          > & {
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'id' | 'altText' | 'url' | 'width' | 'height'
                >
              >;
            })
        | ({__typename: 'Video'} & Pick<
            StorefrontAPI.Video,
            'mediaContentType' | 'alt'
          > & {
              previewImage?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'id' | 'altText' | 'url' | 'width' | 'height'
                >
              >;
              sources: Array<
                Pick<
                  StorefrontAPI.VideoSource,
                  'url' | 'format' | 'height' | 'width' | 'mimeType'
                >
              >;
            });
    }>;
  };
  variants: {
    nodes: Array<
      Pick<
        StorefrontAPI.ProductVariant,
        'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
      > & {
        compareAtPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'id' | 'altText' | 'url' | 'width' | 'height'
          >
        >;
        price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
        selectedOptions: Array<
          Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
        >;
        unitPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        isInactiveMetafield?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
      }
    >;
  };
  kits?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
  swatches?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
  fits?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
  relatedCollections?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
  >;
  newAndImprovedMessage?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
  >;
  newAndImprovedDate?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
  >;
  priceWithCode?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
  >;
  metafields: Array<
    StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Metafield, 'namespace' | 'value' | 'key' | 'id'>
    >
  >;
  aiReviewInfo?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>;
  priceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
};

export type ProductOptionsFragment = Pick<
  StorefrontAPI.ProductOption,
  'name'
> & {optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>};

export type ProductVariantFragment = Pick<
  StorefrontAPI.ProductVariant,
  'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
> & {
  compareAtPrice?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  image?: StorefrontAPI.Maybe<
    {__typename: 'Image'} & Pick<
      StorefrontAPI.Image,
      'id' | 'altText' | 'url' | 'width' | 'height'
    >
  >;
  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
  selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>;
  unitPrice?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  isInactiveMetafield?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metafield, 'id' | 'value'>
  >;
};

export type MarqoProductsAdditionalDataQueryVariables = StorefrontAPI.Exact<{
  productIds:
    | Array<StorefrontAPI.Scalars['ID']['input']>
    | StorefrontAPI.Scalars['ID']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type MarqoProductsAdditionalDataQuery = {
  nodes: Array<
    StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Product, 'tags' | 'handle'> & {
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          maxVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        variants: {
          nodes: Array<
            Pick<StorefrontAPI.ProductVariant, 'sku'> & {
              price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
            }
          >;
        };
        priceWithCode?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
      }
    >
  >;
};

export type VertexProductsAdditionalDataQueryVariables = StorefrontAPI.Exact<{
  productIds:
    | Array<StorefrontAPI.Scalars['ID']['input']>
    | StorefrontAPI.Scalars['ID']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type VertexProductsAdditionalDataQuery = {
  nodes: Array<
    StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Product, 'id' | 'tags' | 'handle'> & {
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          maxVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              'id' | 'quantityAvailable' | 'availableForSale' | 'sku' | 'title'
            > & {
              price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
              unitPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
            }
          >;
        };
        priceWithCode?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
      }
    >
  >;
};

export type AllLocalizationsQueryVariables = StorefrontAPI.Exact<{
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type AllLocalizationsQuery = {
  localization: {
    availableCountries: Array<
      Pick<StorefrontAPI.Country, 'isoCode' | 'name'> & {
        market?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Market, 'handle'>>;
        currency: Pick<StorefrontAPI.Currency, 'isoCode' | 'symbol'>;
        availableLanguages: Array<Pick<StorefrontAPI.Language, 'isoCode'>>;
      }
    >;
  };
};

export type CollectionQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CollectionQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Collection,
      'id' | 'handle' | 'title' | 'description' | 'descriptionHtml'
    > & {
      image?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'id' | 'altText' | 'url' | 'width' | 'height'
        >
      >;
      seo: Pick<StorefrontAPI.Seo, 'title' | 'description'>;
      subCollectionMenu?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'namespace' | 'key' | 'value'>
      >;
      descriptionSeoTag?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'key' | 'value'>
      >;
      titleSeoTag?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'key' | 'value'>
      >;
      trending?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'key' | 'value'>
      >;
      category?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'namespace' | 'key' | 'value'>
      >;
      shop_by?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'namespace' | 'key' | 'value'>
      >;
      showEmptyInventory?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'namespace' | 'key' | 'value'>
      >;
      noIndex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>;
    }
  >;
};

export type CollectionByIdQueryVariables = StorefrontAPI.Exact<{
  id: StorefrontAPI.Scalars['ID']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CollectionByIdQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Collection, 'id' | 'title' | 'handle'> & {
      trending?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'key' | 'value'>
      >;
    }
  >;
};

export type StoreCollectionsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
}>;

export type StoreCollectionsQuery = {
  collections: {
    nodes: Array<
      Pick<StorefrontAPI.Collection, 'id' | 'title' | 'handle'> & {
        image?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'id' | 'altText' | 'url' | 'width' | 'height'
          >
        >;
      }
    >;
    pageInfo: Pick<
      StorefrontAPI.PageInfo,
      'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'
    >;
  };
};

export type CollectionsByIdsQueryVariables = StorefrontAPI.Exact<{
  query: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  first: StorefrontAPI.Scalars['Int']['input'];
}>;

export type CollectionsByIdsQuery = {
  collections: {
    edges: Array<{
      node: Pick<StorefrontAPI.Collection, 'id' | 'title' | 'handle'>;
    }>;
  };
};

export type LoginMutationVariables = StorefrontAPI.Exact<{
  input: StorefrontAPI.CustomerAccessTokenCreateInput;
}>;

export type LoginMutation = {
  customerAccessTokenCreate?: StorefrontAPI.Maybe<{
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
    customerAccessToken?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerAccessToken, 'accessToken' | 'expiresAt'>
    >;
  }>;
};

export type CustomerRecoverMutationVariables = StorefrontAPI.Exact<{
  email: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CustomerRecoverMutation = {
  customerRecover?: StorefrontAPI.Maybe<{
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
  }>;
};

export type CustomerResetMutationVariables = StorefrontAPI.Exact<{
  id: StorefrontAPI.Scalars['ID']['input'];
  input: StorefrontAPI.CustomerResetInput;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CustomerResetMutation = {
  customerReset?: StorefrontAPI.Maybe<{
    customerAccessToken?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerAccessToken, 'accessToken' | 'expiresAt'>
    >;
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
  }>;
};

export type CustomerUpdateMutationVariables = StorefrontAPI.Exact<{
  customerAccessToken: StorefrontAPI.Scalars['String']['input'];
  customer: StorefrontAPI.CustomerUpdateInput;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CustomerUpdateMutation = {
  customerUpdate?: StorefrontAPI.Maybe<{
    customer?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Customer,
        'acceptsMarketing' | 'email' | 'firstName' | 'id' | 'lastName' | 'phone'
      >
    >;
    customerAccessToken?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerAccessToken, 'accessToken' | 'expiresAt'>
    >;
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
  }>;
};

export type CustomerActivateMutationVariables = StorefrontAPI.Exact<{
  id: StorefrontAPI.Scalars['ID']['input'];
  input: StorefrontAPI.CustomerActivateInput;
}>;

export type CustomerActivateMutation = {
  customerActivate?: StorefrontAPI.Maybe<{
    customer?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Customer, 'id' | 'email'>
    >;
    customerAccessToken?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerAccessToken, 'accessToken' | 'expiresAt'>
    >;
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
    userErrors: Array<Pick<StorefrontAPI.UserError, 'field' | 'message'>>;
  }>;
};

export type CustomerCreateMutationVariables = StorefrontAPI.Exact<{
  input: StorefrontAPI.CustomerCreateInput;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CustomerCreateMutation = {
  customerCreate?: StorefrontAPI.Maybe<{
    customer?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Customer, 'id'>>;
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
  }>;
};

export type RegisterLoginMutationVariables = StorefrontAPI.Exact<{
  input: StorefrontAPI.CustomerAccessTokenCreateInput;
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type RegisterLoginMutation = {
  customerAccessTokenCreate?: StorefrontAPI.Maybe<{
    customerUserErrors: Array<
      Pick<StorefrontAPI.CustomerUserError, 'code' | 'field' | 'message'>
    >;
    customerAccessToken?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerAccessToken, 'accessToken' | 'expiresAt'>
    >;
  }>;
};

export type CustomerQueryVariables = StorefrontAPI.Exact<{
  customerAccessToken: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CustomerQuery = {
  customer?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Customer,
      | 'id'
      | 'acceptsMarketing'
      | 'email'
      | 'firstName'
      | 'lastName'
      | 'numberOfOrders'
      | 'phone'
    > & {
      addresses: {
        nodes: Array<
          Pick<
            StorefrontAPI.MailingAddress,
            | 'id'
            | 'formatted'
            | 'firstName'
            | 'lastName'
            | 'company'
            | 'address1'
            | 'address2'
            | 'country'
            | 'province'
            | 'city'
            | 'zip'
            | 'phone'
          > & {countryCode: StorefrontAPI.MailingAddress['countryCodeV2']}
        >;
      };
      defaultAddress?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.MailingAddress,
          | 'id'
          | 'formatted'
          | 'firstName'
          | 'lastName'
          | 'company'
          | 'address1'
          | 'address2'
          | 'country'
          | 'province'
          | 'city'
          | 'zip'
          | 'phone'
        > & {countryCode: StorefrontAPI.MailingAddress['countryCodeV2']}
      >;
      vitals?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
    }
  >;
};

export type FreeShippingThresholdQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
}>;

export type FreeShippingThresholdQuery = {
  metaobjects: {
    nodes: Array<{
      defaultThreshold?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'value'>
      >;
      countryCode?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'value'>
      >;
      usdThreshold?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'value'>
      >;
      threshold?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'value'>
      >;
      currencyCode?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MetaobjectField, 'value'>
      >;
    }>;
  };
};

export type LanguagesQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type LanguagesQuery = {
  localization: {
    availableLanguages: Array<
      Pick<StorefrontAPI.Language, 'name' | 'isoCode' | 'endonymName'>
    >;
  };
};

export type DefaultLanguageQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
}>;

export type DefaultLanguageQuery = {
  localization: {
    language: Pick<StorefrontAPI.Language, 'isoCode' | 'endonymName'>;
    availableLanguages: Array<
      Pick<StorefrontAPI.Language, 'name' | 'isoCode' | 'endonymName'>
    >;
  };
};

export type OrderQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  orderId: StorefrontAPI.Scalars['ID']['input'];
}>;

export type OrderQuery = {
  order?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Order,
      'fulfillmentStatus' | 'processedAt' | 'cancelReason' | 'name' | 'id'
    > & {
      originalTotalPrice: Pick<
        StorefrontAPI.MoneyV2,
        'amount' | 'currencyCode'
      >;
      subtotalPrice?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      originalTotalDuties?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      totalTax?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      discountApplications: {
        nodes: Array<{
          value:
            | ({__typename: 'MoneyV2'} & Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >)
            | ({__typename: 'PricingPercentageValue'} & Pick<
                StorefrontAPI.PricingPercentageValue,
                'percentage'
              >);
        }>;
      };
      totalShippingPrice: Pick<
        StorefrontAPI.MoneyV2,
        'amount' | 'currencyCode'
      >;
      totalRefunded: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      lineItems: {
        nodes: Array<
          Pick<StorefrontAPI.OrderLineItem, 'title' | 'quantity'> & {
            originalTotalPrice: Pick<
              StorefrontAPI.MoneyV2,
              'amount' | 'currencyCode'
            >;
            discountedTotalPrice: Pick<
              StorefrontAPI.MoneyV2,
              'amount' | 'currencyCode'
            >;
            variant?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
                product: Pick<StorefrontAPI.Product, 'handle'> & {
                  options: Array<
                    Pick<StorefrontAPI.ProductOption, 'name'> & {
                      optionValues: Array<
                        Pick<StorefrontAPI.ProductOptionValue, 'name'>
                      >;
                    }
                  >;
                };
                selectedOptions: Array<
                  Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                >;
                image?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Image, 'altText' | 'url'>
                >;
              }
            >;
          }
        >;
      };
      shippingAddress?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
      >;
      billingAddress?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
      >;
      customAttributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
    }
  >;
};

export type AllCustomerOrdersQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  customerAccessToken: StorefrontAPI.Scalars['String']['input'];
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
}>;

export type AllCustomerOrdersQuery = {
  customer?: StorefrontAPI.Maybe<{
    orders: {
      nodes: Array<
        Pick<
          StorefrontAPI.Order,
          'fulfillmentStatus' | 'processedAt' | 'cancelReason' | 'name' | 'id'
        > & {
          originalTotalPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          subtotalPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          originalTotalDuties?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          totalTax?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          discountApplications: {
            nodes: Array<{
              value:
                | ({__typename: 'MoneyV2'} & Pick<
                    StorefrontAPI.MoneyV2,
                    'amount' | 'currencyCode'
                  >)
                | ({__typename: 'PricingPercentageValue'} & Pick<
                    StorefrontAPI.PricingPercentageValue,
                    'percentage'
                  >);
            }>;
          };
          totalShippingPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          totalRefunded: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          lineItems: {
            nodes: Array<
              Pick<StorefrontAPI.OrderLineItem, 'title' | 'quantity'> & {
                originalTotalPrice: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
                discountedTotalPrice: Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >;
                variant?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
                    product: Pick<StorefrontAPI.Product, 'handle'> & {
                      options: Array<
                        Pick<StorefrontAPI.ProductOption, 'name'> & {
                          optionValues: Array<
                            Pick<StorefrontAPI.ProductOptionValue, 'name'>
                          >;
                        }
                      >;
                    };
                    selectedOptions: Array<
                      Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                    >;
                    image?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Image, 'altText' | 'url'>
                    >;
                  }
                >;
              }
            >;
          };
          shippingAddress?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
          >;
          billingAddress?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MailingAddress, 'formatted' | 'name'>
          >;
          customAttributes: Array<
            Pick<StorefrontAPI.Attribute, 'key' | 'value'>
          >;
        }
      >;
      pageInfo: Pick<
        StorefrontAPI.PageInfo,
        'hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor'
      >;
    };
  }>;
};

export type AllPagesQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  query: StorefrontAPI.Scalars['String']['input'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
}>;

export type AllPagesQuery = {
  pages: {
    nodes: Array<
      Pick<StorefrontAPI.Page, 'id' | 'onlineStoreUrl' | 'title' | 'handle'>
    >;
    pageInfo: Pick<
      StorefrontAPI.PageInfo,
      'hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor'
    >;
  };
};

export type ProductQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  handle: StorefrontAPI.Scalars['String']['input'];
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  selectedOptions:
    | Array<StorefrontAPI.SelectedOptionInput>
    | StorefrontAPI.SelectedOptionInput;
}>;

export type ProductQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Product,
      | 'id'
      | 'title'
      | 'tags'
      | 'isGiftCard'
      | 'vendor'
      | 'handle'
      | 'descriptionHtml'
      | 'description'
      | 'productType'
      | 'publishedAt'
      | 'availableForSale'
    > & {
      options: Array<
        Pick<StorefrontAPI.ProductOption, 'name'> & {
          optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>;
        }
      >;
      firstImage?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'id' | 'altText' | 'url' | 'width' | 'height'
        >
      >;
      selectedVariant?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.ProductVariant,
          'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'id' | 'altText' | 'url' | 'width' | 'height'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          isInactiveMetafield?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Metafield, 'id' | 'value'>
          >;
        }
      >;
      seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
      media: {__typename: 'MediaConnection'} & {
        edges: Array<{
          node:
            | ({__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'mediaContentType' | 'alt'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                })
            | ({__typename: 'Video'} & Pick<
                StorefrontAPI.Video,
                'mediaContentType' | 'alt'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  sources: Array<
                    Pick<
                      StorefrontAPI.VideoSource,
                      'url' | 'format' | 'height' | 'width' | 'mimeType'
                    >
                  >;
                });
        }>;
      };
      variants: {
        nodes: Array<
          Pick<
            StorefrontAPI.ProductVariant,
            'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'id' | 'altText' | 'url' | 'width' | 'height'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            isInactiveMetafield?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
          }
        >;
      };
      kits?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
      swatches?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      fits?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
      relatedCollections?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      newAndImprovedMessage?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      newAndImprovedDate?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      priceWithCode?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      metafields: Array<
        StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'namespace' | 'value' | 'key' | 'id'>
        >
      >;
      aiReviewInfo?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'value'>
      >;
      priceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
    }
  >;
};

export type ProductByIdQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  id: StorefrontAPI.Scalars['ID']['input'];
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  selectedOptions:
    | Array<StorefrontAPI.SelectedOptionInput>
    | StorefrontAPI.SelectedOptionInput;
}>;

export type ProductByIdQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Product,
      | 'id'
      | 'title'
      | 'tags'
      | 'isGiftCard'
      | 'vendor'
      | 'handle'
      | 'descriptionHtml'
      | 'description'
      | 'productType'
      | 'publishedAt'
      | 'availableForSale'
    > & {
      options: Array<
        Pick<StorefrontAPI.ProductOption, 'name'> & {
          optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>;
        }
      >;
      firstImage?: StorefrontAPI.Maybe<
        {__typename: 'Image'} & Pick<
          StorefrontAPI.Image,
          'id' | 'altText' | 'url' | 'width' | 'height'
        >
      >;
      selectedVariant?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.ProductVariant,
          'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          image?: StorefrontAPI.Maybe<
            {__typename: 'Image'} & Pick<
              StorefrontAPI.Image,
              'id' | 'altText' | 'url' | 'width' | 'height'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          isInactiveMetafield?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Metafield, 'id' | 'value'>
          >;
        }
      >;
      seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
      media: {__typename: 'MediaConnection'} & {
        edges: Array<{
          node:
            | ({__typename: 'MediaImage'} & Pick<
                StorefrontAPI.MediaImage,
                'mediaContentType' | 'alt'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                })
            | ({__typename: 'Video'} & Pick<
                StorefrontAPI.Video,
                'mediaContentType' | 'alt'
              > & {
                  previewImage?: StorefrontAPI.Maybe<
                    {__typename: 'Image'} & Pick<
                      StorefrontAPI.Image,
                      'id' | 'altText' | 'url' | 'width' | 'height'
                    >
                  >;
                  sources: Array<
                    Pick<
                      StorefrontAPI.VideoSource,
                      'url' | 'format' | 'height' | 'width' | 'mimeType'
                    >
                  >;
                });
        }>;
      };
      variants: {
        nodes: Array<
          Pick<
            StorefrontAPI.ProductVariant,
            'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'id' | 'altText' | 'url' | 'width' | 'height'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            isInactiveMetafield?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
          }
        >;
      };
      kits?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
      swatches?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      fits?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'id' | 'value'>>;
      relatedCollections?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      newAndImprovedMessage?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      newAndImprovedDate?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      priceWithCode?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
      metafields: Array<
        StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'namespace' | 'value' | 'key' | 'id'>
        >
      >;
      aiReviewInfo?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'value'>
      >;
      priceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        maxVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
    }
  >;
};

export type ProductIdByHandleQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
}>;

export type ProductIdByHandleQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Product, 'id' | 'title'> & {
      swatches?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Metafield, 'id' | 'value'>
      >;
    }
  >;
};

export type ProductsByIdsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  productIds:
    | Array<StorefrontAPI.Scalars['ID']['input']>
    | StorefrontAPI.Scalars['ID']['input'];
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
  selectedOptions:
    | Array<StorefrontAPI.SelectedOptionInput>
    | StorefrontAPI.SelectedOptionInput;
}>;

export type ProductsByIdsQuery = {
  nodes: Array<
    StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Product,
        | 'id'
        | 'title'
        | 'tags'
        | 'isGiftCard'
        | 'vendor'
        | 'handle'
        | 'descriptionHtml'
        | 'description'
        | 'productType'
        | 'publishedAt'
        | 'availableForSale'
      > & {
        options: Array<
          Pick<StorefrontAPI.ProductOption, 'name'> & {
            optionValues: Array<Pick<StorefrontAPI.ProductOptionValue, 'name'>>;
          }
        >;
        firstImage?: StorefrontAPI.Maybe<
          {__typename: 'Image'} & Pick<
            StorefrontAPI.Image,
            'id' | 'altText' | 'url' | 'width' | 'height'
          >
        >;
        selectedVariant?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.ProductVariant,
            'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: StorefrontAPI.Maybe<
              {__typename: 'Image'} & Pick<
                StorefrontAPI.Image,
                'id' | 'altText' | 'url' | 'width' | 'height'
              >
            >;
            price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
            product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
            unitPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            isInactiveMetafield?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Metafield, 'id' | 'value'>
            >;
          }
        >;
        seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>;
        media: {__typename: 'MediaConnection'} & {
          edges: Array<{
            node:
              | ({__typename: 'MediaImage'} & Pick<
                  StorefrontAPI.MediaImage,
                  'mediaContentType' | 'alt'
                > & {
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'id' | 'altText' | 'url' | 'width' | 'height'
                      >
                    >;
                  })
              | ({__typename: 'Video'} & Pick<
                  StorefrontAPI.Video,
                  'mediaContentType' | 'alt'
                > & {
                    previewImage?: StorefrontAPI.Maybe<
                      {__typename: 'Image'} & Pick<
                        StorefrontAPI.Image,
                        'id' | 'altText' | 'url' | 'width' | 'height'
                      >
                    >;
                    sources: Array<
                      Pick<
                        StorefrontAPI.VideoSource,
                        'url' | 'format' | 'height' | 'width' | 'mimeType'
                      >
                    >;
                  });
          }>;
        };
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              'quantityAvailable' | 'availableForSale' | 'id' | 'sku' | 'title'
            > & {
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
              image?: StorefrontAPI.Maybe<
                {__typename: 'Image'} & Pick<
                  StorefrontAPI.Image,
                  'id' | 'altText' | 'url' | 'width' | 'height'
                >
              >;
              price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
              product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
              unitPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >;
              isInactiveMetafield?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.Metafield, 'id' | 'value'>
              >;
            }
          >;
        };
        kits?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        swatches?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        fits?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        relatedCollections?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        newAndImprovedMessage?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        newAndImprovedDate?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        priceWithCode?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'id' | 'value'>
        >;
        metafields: Array<
          StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Metafield, 'namespace' | 'value' | 'key' | 'id'>
          >
        >;
        aiReviewInfo?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metafield, 'value'>
        >;
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          maxVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
      }
    >
  >;
};

export type GetMenuQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type GetMenuQuery = {
  menu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'url'>>;
    }
  >;
};

export type ProductVariantQueryVariables = StorefrontAPI.Exact<{
  id: StorefrontAPI.Scalars['ID']['input'];
}>;

export type ProductVariantQuery = {
  node?: StorefrontAPI.Maybe<Pick<StorefrontAPI.ProductVariant, 'sku'>>;
};

interface GeneratedQueryTypes {
  '#graphql\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\nquery MarqoProductsAdditionalData(\n    $productIds: [ID!]!\n    $country: CountryCode\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    nodes(ids: $productIds) {\n        ... on Product {\n            tags\n            handle\n            priceRange {\n                minVariantPrice {\n                    ...Money\n                }\n                maxVariantPrice {\n                    ...Money\n                }\n            }\n            variants (first: 1) {\n                nodes {\n                    sku\n                    price {\n                        ...Money\n                    }\n                    compareAtPrice {\n                        ...Money\n                    }\n                }\n            }\n            priceWithCode: metafield(namespace: "custom", key: "price_with_code") {\n                id\n                value\n            }\n        }\n    }\n}\n': {
    return: MarqoProductsAdditionalDataQuery;
    variables: MarqoProductsAdditionalDataQueryVariables;
  };
  '#graphql\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\nquery VertexProductsAdditionalData(\n    $productIds: [ID!]!\n    $country: CountryCode\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    nodes(ids: $productIds) {\n        ... on Product {\n            id\n            tags\n            handle\n            priceRange {\n                minVariantPrice {\n                    ...Money\n                }\n                maxVariantPrice {\n                    ...Money\n                }\n            }\n            variants (first: 200) {\n                nodes {\n                    id\n                    quantityAvailable\n                    availableForSale\n                    price {\n                        ...Money\n                    }\n                    unitPrice {\n                        ...Money\n                    }\n                    compareAtPrice {\n                        ...Money\n                    }\n                    sku\n                    title\n                }\n            }\n            priceWithCode: metafield(namespace: "custom", key: "price_with_code") {\n                id\n                value\n            }\n        }\n    }\n}\n': {
    return: VertexProductsAdditionalDataQuery;
    variables: VertexProductsAdditionalDataQueryVariables;
  };
  '#graphql\nquery AllLocalizations($language: LanguageCode) @inContext(language: $language) {\n    localization {\n        availableCountries {\n            isoCode\n            name\n            market {\n                handle\n            }\n            currency {\n                isoCode\n                symbol\n            }\n            availableLanguages {\n                isoCode\n            }\n        }\n    }\n}\n': {
    return: AllLocalizationsQuery;
    variables: AllLocalizationsQueryVariables;
  };
  '#graphql\nquery Collection(\n    $handle: String!\n    $country: CountryCode\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    collection(handle: $handle) {\n        id\n        handle\n        title\n        description\n        descriptionHtml\n        image {\n            ...Image\n        }\n        seo {\n            title\n            description\n        }\n        subCollectionMenu: metafield(\n            namespace: "global"\n            key: "sub_collection_menu"\n        ) {\n            namespace\n            key\n            value\n        }\n        descriptionSeoTag: metafield(namespace: "global", key: "description_tag") {\n            key\n            value\n        }\n        titleSeoTag: metafield(namespace: "global", key: "title_tag") {\n            key\n            value\n        }\n        trending: metafield(\n            namespace: "custom"\n            key: "collection_trending"\n        ) {\n            key\n            value\n        }\n        category: metafield(namespace: "custom", key: "category") {\n            namespace\n            key\n            value\n        }\n        shop_by: metafield(namespace: "custom", key: "shop_by") {\n            namespace\n            key\n            value\n        }\n        showEmptyInventory: metafield(namespace: "custom", key: "show_0_inventory_items") {\n            namespace\n            key\n            value\n        }\n        noIndex: metafield(namespace: "seo", key: "no_index") {\n          value\n        }\n    }\n}\n#graphql\nfragment Image on Image {\n    __typename\n    id\n    altText\n    url\n    width\n    height\n}\n': {
    return: CollectionQuery;
    variables: CollectionQueryVariables;
  };
  '#graphql\nquery CollectionById(\n    $id: ID!,\n    $country: CountryCode\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    collection(id: $id) {\n        id\n        title\n        handle\n        trending: metafield(\n            namespace: "custom"\n            key: "collection_trending"\n        ) {\n            key\n            value\n        }\n    }\n}\n': {
    return: CollectionByIdQuery;
    variables: CollectionByIdQueryVariables;
  };
  '#graphql\n#graphql\n#graphql\nfragment Image on Image {\n    __typename\n    id\n    altText\n    url\n    width\n    height\n}\nfragment Collection on Collection {\n    id\n    title\n    handle\n    image {\n        ...Image\n    }\n}\nquery StoreCollections(\n    $country: CountryCode\n    $endCursor: String\n    $first: Int\n    $language: LanguageCode\n    $last: Int\n    $startCursor: String\n) @inContext(country: $country, language: $language) {\n    collections(\n        first: $first,\n        last: $last,\n        before: $startCursor,\n        after: $endCursor\n    ) {\n        nodes {\n            ...Collection\n        }\n        pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n        }\n    }\n}\n': {
    return: StoreCollectionsQuery;
    variables: StoreCollectionsQueryVariables;
  };
  '#graphql\nquery CollectionsByIds(\n  $query: String!,\n  $country: CountryCode,\n  $language: LanguageCode,\n  $first: Int!\n) @inContext(country: $country, language: $language) {\n  collections(first: $first, query: $query) {\n    edges {\n      node {   \n        id\n        title\n        handle\n      }\n    }\n  }\n}\n': {
    return: CollectionsByIdsQuery;
    variables: CollectionsByIdsQueryVariables;
  };
  '#graphql\nquery Customer(\n    $customerAccessToken: String!\n    $country: CountryCode\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    customer(customerAccessToken: $customerAccessToken) {\n        ...Customer\n    }\n}\n#graphql\nfragment Customer on Customer {\n    id\n    acceptsMarketing\n    addresses(first: 100) {\n        nodes {\n            ...Address\n        }\n    }\n    defaultAddress {\n        ...Address\n    }\n    email\n    firstName\n    lastName\n    numberOfOrders\n    phone\n    id\n    vitals: metafield(namespace: "myaccount", key: "vitals") {\n        id\n        value\n    }\n\n}\nfragment Address on MailingAddress {\n    id\n    formatted\n    firstName\n    lastName\n    company\n    address1\n    address2\n    country\n    province\n    city\n    zip\n    phone\n    countryCode: countryCodeV2\n}\n\n': {
    return: CustomerQuery;
    variables: CustomerQueryVariables;
  };
  '#graphql\nquery FreeShippingThreshold($country: CountryCode = US) @inContext(country: $country) {\n  metaobjects(first: 100, type: "freeShippingThreshold") {\n    nodes {\n      defaultThreshold: field(key: "worldwideDefaultThreshold") {\n        value\n      }\n      countryCode: field(key: "countryCode") {\n        value\n      }\n      usdThreshold: field(key: "usdThreshold") {\n        value\n      }\n      threshold: field(key: "threshold") {\n        value\n      }\n      currencyCode: field(key: "currencyCode") {\n        value\n      }\n    }\n  }\n}\n': {
    return: FreeShippingThresholdQuery;
    variables: FreeShippingThresholdQueryVariables;
  };
  '#graphql\nquery Languages(\n    $country: CountryCode\n    $language: LanguageCode\n)@inContext(country: $country, language: $language) {\n    localization {\n        availableLanguages {\n            name\n            isoCode\n            endonymName\n        }\n    }\n}\n': {
    return: LanguagesQuery;
    variables: LanguagesQueryVariables;
  };
  '#graphql\nquery DefaultLanguage(\n    $country: CountryCode\n)@inContext(country: $country) {\n    localization {\n        language {\n            isoCode\n            endonymName\n        }\n        availableLanguages {\n            name\n            isoCode\n            endonymName\n        }\n    }\n}\n': {
    return: DefaultLanguageQuery;
    variables: DefaultLanguageQueryVariables;
  };
  '#graphql\n#graphql\n#graphql\nfragment ProductOptions on ProductOption {\n    name\n    optionValues {\n        name\n    }\n}\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\nfragment Order on Order {\n    originalTotalPrice {\n        ...Money\n    }\n    subtotalPrice {\n        ...Money\n    }\n    originalTotalDuties {\n        ...Money\n    }\n    totalTax {\n        ...Money\n    }\n    discountApplications(first: 1) {\n        nodes {\n            value {\n                __typename\n                ... on MoneyV2 {\n                    ...Money\n                }\n                ... on PricingPercentageValue {\n                    percentage\n                }\n            }\n        }\n    }\n    totalShippingPrice {\n        ...Money\n    }\n    totalRefunded {\n        ...Money\n    }\n    fulfillmentStatus\n    lineItems(first: 25) {\n        nodes {\n            title\n            quantity\n            originalTotalPrice {\n                ...Money\n            }\n            discountedTotalPrice {\n                ...Money\n            }\n            variant {\n                id\n                title,\n                product {\n                    handle\n                    options {\n                        ...ProductOptions\n                    }\n                }\n                selectedOptions {\n                    name\n                    value\n                }\n                image {\n                    altText\n                    url\n                }\n            }\n        }\n    }\n    shippingAddress {\n        formatted\n        name\n    }\n    billingAddress {\n        formatted\n        name\n    }\n    processedAt\n    cancelReason\n    name\n    id\n    customAttributes {\n        key\n        value\n    }\n}\n\nquery Order(\n    $country: CountryCode\n    $language: LanguageCode\n    $orderId: ID!\n) @inContext(country: $country, language: $language) {\n    order: node(id: $orderId) {\n        ... on Order {\n            ...Order\n        }\n    }\n}\n': {
    return: OrderQuery;
    variables: OrderQueryVariables;
  };
  '#graphql\n#graphql\n#graphql\n#graphql\nfragment ProductOptions on ProductOption {\n    name\n    optionValues {\n        name\n    }\n}\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\nfragment Order on Order {\n    originalTotalPrice {\n        ...Money\n    }\n    subtotalPrice {\n        ...Money\n    }\n    originalTotalDuties {\n        ...Money\n    }\n    totalTax {\n        ...Money\n    }\n    discountApplications(first: 1) {\n        nodes {\n            value {\n                __typename\n                ... on MoneyV2 {\n                    ...Money\n                }\n                ... on PricingPercentageValue {\n                    percentage\n                }\n            }\n        }\n    }\n    totalShippingPrice {\n        ...Money\n    }\n    totalRefunded {\n        ...Money\n    }\n    fulfillmentStatus\n    lineItems(first: 25) {\n        nodes {\n            title\n            quantity\n            originalTotalPrice {\n                ...Money\n            }\n            discountedTotalPrice {\n                ...Money\n            }\n            variant {\n                id\n                title,\n                product {\n                    handle\n                    options {\n                        ...ProductOptions\n                    }\n                }\n                selectedOptions {\n                    name\n                    value\n                }\n                image {\n                    altText\n                    url\n                }\n            }\n        }\n    }\n    shippingAddress {\n        formatted\n        name\n    }\n    billingAddress {\n        formatted\n        name\n    }\n    processedAt\n    cancelReason\n    name\n    id\n    customAttributes {\n        key\n        value\n    }\n}\n\nfragment Orders on Customer {\n    orders(\n        sortKey: PROCESSED_AT,\n        reverse: true,\n        first: $first,\n        last: $last,\n        before: $startCursor,\n        after: $endCursor,\n    ) {\n        nodes {\n            ...Order\n        }\n        pageInfo {\n            hasPreviousPage\n            hasNextPage\n            startCursor\n            endCursor\n        }\n    }\n}\n\nquery AllCustomerOrders (\n    $country: CountryCode\n    $customerAccessToken: String!\n    $language: LanguageCode\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n) @inContext(country: $country, language: $language) {\n    customer(customerAccessToken: $customerAccessToken) {\n        ...Orders\n    }\n}\n': {
    return: AllCustomerOrdersQuery;
    variables: AllCustomerOrdersQueryVariables;
  };
  '#graphql\nquery AllPages (\n    $country: CountryCode\n    $language: LanguageCode\n    $query: String!\n    $first: Int\n) @inContext(country: $country, language: $language) {\n    pages(query: $query, first: $first) {\n      nodes {\n        id\n        onlineStoreUrl\n        title\n        handle\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        startCursor\n        endCursor\n      }\n    }\n}\n': {
    return: AllPagesQuery;
    variables: AllPagesQueryVariables;
  };
  '#graphql\nquery Product(\n    $country: CountryCode\n    $handle: String!\n    $language: LanguageCode\n    $selectedOptions: [SelectedOptionInput!]!\n) @inContext(country: $country, language: $language) {\n    product(handle: $handle) {\n        ...Product\n    }\n}\n#graphql\nfragment Product on Product {\n    id\n    title\n    tags\n    isGiftCard\n    vendor\n    handle\n    descriptionHtml\n    description\n    productType\n    publishedAt\n    options {\n        ...ProductOptions\n    }\n    availableForSale\n    firstImage: featuredImage {\n      ...Image\n    }\n    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {\n        ...ProductVariant\n    }\n    seo {\n        description\n        title\n    }\n    media(first: 20) {\n        __typename\n        edges {\n            node {\n                ... on MediaImage {\n                    __typename\n                    mediaContentType\n                    alt\n                    previewImage {\n                        ...Image\n                    }\n                }\n                ... on Video {\n                    __typename\n                    mediaContentType\n                    alt\n                    previewImage {\n                        ...Image\n                    }\n                    sources {\n                        url\n                        format\n                        height\n                        width\n                        mimeType\n                    }\n                }\n            }\n        }\n    }\n    variants(first: 250) {\n        nodes {\n            ...ProductVariant\n        }\n    }\n    kits: metafield(namespace: "linked_kits", key: "kits") {\n        id\n        value\n    }\n    swatches: metafield(namespace: "linked_products", key: "swatches") {\n        id\n        value\n    }\n    fits: metafield(namespace: "products", key: "family_products") {\n        id\n        value\n    }\n    relatedCollections: metafield(namespace: "collection", key: "related_collections") {\n        id\n        value\n    }\n    newAndImprovedMessage: metafield(namespace: "custom", key: "new_improved_message") {\n        id\n        value\n    }\n    newAndImprovedDate: metafield(namespace: "custom", key: "new_improved_date") {\n        id\n        value\n    }\n    priceWithCode: metafield(namespace: "custom", key: "price_with_code") {\n        id\n        value\n    }\n    metafields(identifiers: [{namespace: "collection", key: "handle"}, {namespace: "collection", key: "name"}] ) {\n        namespace\n        value\n        key\n        id\n    }\n    aiReviewInfo: metafield(namespace: "custom", key: "review_summary") {\n        value\n    }  \n    priceRange {\n        minVariantPrice {\n            ...Money\n        }\n        maxVariantPrice {\n            ...Money\n        }\n    }\n}\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\n#graphql\nfragment ProductVariant on ProductVariant {\n    quantityAvailable\n    availableForSale\n    compareAtPrice {\n        amount\n        currencyCode\n    }\n    id\n    image {\n        ...Image\n    }\n    price {\n        amount\n        currencyCode\n    }\n    product {\n        title\n        handle\n    }\n    selectedOptions {\n        name\n        value\n    }\n    sku\n    title\n    unitPrice {\n        amount\n        currencyCode\n    }\n    isInactiveMetafield: metafield(namespace: "global", key: "inactive") {\n        id\n        value\n    }\n}\n#graphql\nfragment Image on Image {\n    __typename\n    id\n    altText\n    url\n    width\n    height\n}\n\n#graphql\nfragment ProductOptions on ProductOption {\n    name\n    optionValues {\n        name\n    }\n}\n\n': {
    return: ProductQuery;
    variables: ProductQueryVariables;
  };
  '#graphql\nquery ProductById(\n    $country: CountryCode\n    $id: ID!\n    $language: LanguageCode,\n    $selectedOptions: [SelectedOptionInput!]!\n) @inContext(country: $country, language: $language) {\n    product(id: $id) {\n        ...Product\n    }\n}\n#graphql\nfragment Product on Product {\n    id\n    title\n    tags\n    isGiftCard\n    vendor\n    handle\n    descriptionHtml\n    description\n    productType\n    publishedAt\n    options {\n        ...ProductOptions\n    }\n    availableForSale\n    firstImage: featuredImage {\n      ...Image\n    }\n    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {\n        ...ProductVariant\n    }\n    seo {\n        description\n        title\n    }\n    media(first: 20) {\n        __typename\n        edges {\n            node {\n                ... on MediaImage {\n                    __typename\n                    mediaContentType\n                    alt\n                    previewImage {\n                        ...Image\n                    }\n                }\n                ... on Video {\n                    __typename\n                    mediaContentType\n                    alt\n                    previewImage {\n                        ...Image\n                    }\n                    sources {\n                        url\n                        format\n                        height\n                        width\n                        mimeType\n                    }\n                }\n            }\n        }\n    }\n    variants(first: 250) {\n        nodes {\n            ...ProductVariant\n        }\n    }\n    kits: metafield(namespace: "linked_kits", key: "kits") {\n        id\n        value\n    }\n    swatches: metafield(namespace: "linked_products", key: "swatches") {\n        id\n        value\n    }\n    fits: metafield(namespace: "products", key: "family_products") {\n        id\n        value\n    }\n    relatedCollections: metafield(namespace: "collection", key: "related_collections") {\n        id\n        value\n    }\n    newAndImprovedMessage: metafield(namespace: "custom", key: "new_improved_message") {\n        id\n        value\n    }\n    newAndImprovedDate: metafield(namespace: "custom", key: "new_improved_date") {\n        id\n        value\n    }\n    priceWithCode: metafield(namespace: "custom", key: "price_with_code") {\n        id\n        value\n    }\n    metafields(identifiers: [{namespace: "collection", key: "handle"}, {namespace: "collection", key: "name"}] ) {\n        namespace\n        value\n        key\n        id\n    }\n    aiReviewInfo: metafield(namespace: "custom", key: "review_summary") {\n        value\n    }  \n    priceRange {\n        minVariantPrice {\n            ...Money\n        }\n        maxVariantPrice {\n            ...Money\n        }\n    }\n}\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\n#graphql\nfragment ProductVariant on ProductVariant {\n    quantityAvailable\n    availableForSale\n    compareAtPrice {\n        amount\n        currencyCode\n    }\n    id\n    image {\n        ...Image\n    }\n    price {\n        amount\n        currencyCode\n    }\n    product {\n        title\n        handle\n    }\n    selectedOptions {\n        name\n        value\n    }\n    sku\n    title\n    unitPrice {\n        amount\n        currencyCode\n    }\n    isInactiveMetafield: metafield(namespace: "global", key: "inactive") {\n        id\n        value\n    }\n}\n#graphql\nfragment Image on Image {\n    __typename\n    id\n    altText\n    url\n    width\n    height\n}\n\n#graphql\nfragment ProductOptions on ProductOption {\n    name\n    optionValues {\n        name\n    }\n}\n\n': {
    return: ProductByIdQuery;
    variables: ProductByIdQueryVariables;
  };
  '#graphql\nquery ProductIdByHandle($handle: String!){\n  product(handle: $handle) {\n    id\n    title\n    swatches: metafield(namespace: "linked_products", key: "swatches") {\n        id\n        value\n    }\n  }\n}\n': {
    return: ProductIdByHandleQuery;
    variables: ProductIdByHandleQueryVariables;
  };
  '#graphql\nquery ProductsByIds(\n    $country: CountryCode\n    $productIds: [ID!]!\n    $language: LanguageCode,\n    $selectedOptions: [SelectedOptionInput!]!\n) @inContext(country: $country, language: $language) {\n    nodes(ids: $productIds) {\n        ...Product\n    }\n}\n#graphql\nfragment Product on Product {\n    id\n    title\n    tags\n    isGiftCard\n    vendor\n    handle\n    descriptionHtml\n    description\n    productType\n    publishedAt\n    options {\n        ...ProductOptions\n    }\n    availableForSale\n    firstImage: featuredImage {\n      ...Image\n    }\n    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {\n        ...ProductVariant\n    }\n    seo {\n        description\n        title\n    }\n    media(first: 20) {\n        __typename\n        edges {\n            node {\n                ... on MediaImage {\n                    __typename\n                    mediaContentType\n                    alt\n                    previewImage {\n                        ...Image\n                    }\n                }\n                ... on Video {\n                    __typename\n                    mediaContentType\n                    alt\n                    previewImage {\n                        ...Image\n                    }\n                    sources {\n                        url\n                        format\n                        height\n                        width\n                        mimeType\n                    }\n                }\n            }\n        }\n    }\n    variants(first: 250) {\n        nodes {\n            ...ProductVariant\n        }\n    }\n    kits: metafield(namespace: "linked_kits", key: "kits") {\n        id\n        value\n    }\n    swatches: metafield(namespace: "linked_products", key: "swatches") {\n        id\n        value\n    }\n    fits: metafield(namespace: "products", key: "family_products") {\n        id\n        value\n    }\n    relatedCollections: metafield(namespace: "collection", key: "related_collections") {\n        id\n        value\n    }\n    newAndImprovedMessage: metafield(namespace: "custom", key: "new_improved_message") {\n        id\n        value\n    }\n    newAndImprovedDate: metafield(namespace: "custom", key: "new_improved_date") {\n        id\n        value\n    }\n    priceWithCode: metafield(namespace: "custom", key: "price_with_code") {\n        id\n        value\n    }\n    metafields(identifiers: [{namespace: "collection", key: "handle"}, {namespace: "collection", key: "name"}] ) {\n        namespace\n        value\n        key\n        id\n    }\n    aiReviewInfo: metafield(namespace: "custom", key: "review_summary") {\n        value\n    }  \n    priceRange {\n        minVariantPrice {\n            ...Money\n        }\n        maxVariantPrice {\n            ...Money\n        }\n    }\n}\n#graphql\nfragment Money on MoneyV2 {\n    amount\n    currencyCode\n}\n#graphql\nfragment ProductVariant on ProductVariant {\n    quantityAvailable\n    availableForSale\n    compareAtPrice {\n        amount\n        currencyCode\n    }\n    id\n    image {\n        ...Image\n    }\n    price {\n        amount\n        currencyCode\n    }\n    product {\n        title\n        handle\n    }\n    selectedOptions {\n        name\n        value\n    }\n    sku\n    title\n    unitPrice {\n        amount\n        currencyCode\n    }\n    isInactiveMetafield: metafield(namespace: "global", key: "inactive") {\n        id\n        value\n    }\n}\n#graphql\nfragment Image on Image {\n    __typename\n    id\n    altText\n    url\n    width\n    height\n}\n\n#graphql\nfragment ProductOptions on ProductOption {\n    name\n    optionValues {\n        name\n    }\n}\n\n': {
    return: ProductsByIdsQuery;
    variables: ProductsByIdsQueryVariables;
  };
  '#graphql\nquery getMenu(\n    $handle: String!,\n    $country: CountryCode,\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    menu(handle: $handle) {\n        id\n        items {\n            id\n            title\n            url\n        }\n    }\n}': {
    return: GetMenuQuery;
    variables: GetMenuQueryVariables;
  };
  '#graphql\nquery ProductVariant($id: ID!) {\n    node(id: $id) {\n        ... on ProductVariant {\n            sku\n        }\n    }\n}\n': {
    return: ProductVariantQuery;
    variables: ProductVariantQueryVariables;
  };
}

interface GeneratedMutationTypes {
  '#graphql\n  mutation login($input: CustomerAccessTokenCreateInput!) {\n    customerAccessTokenCreate(input: $input) {\n      customerUserErrors {\n        code\n        field\n        message\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n    }\n  }\n': {
    return: LoginMutation;
    variables: LoginMutationVariables;
  };
  '#graphql\n  mutation customerRecover(\n    $email: String!,\n    $country: CountryCode,\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    customerRecover(email: $email) {\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerRecoverMutation;
    variables: CustomerRecoverMutationVariables;
  };
  '#graphql\n  mutation customerReset(\n    $id: ID!,\n    $input: CustomerResetInput!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    customerReset(id: $id, input: $input) {\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerResetMutation;
    variables: CustomerResetMutationVariables;
  };
  '#graphql\n  # https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate\n  mutation customerUpdate(\n    $customerAccessToken: String!,\n    $customer: CustomerUpdateInput!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {\n      customer {\n        acceptsMarketing\n        email\n        firstName\n        id\n        lastName\n        phone\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerUpdateMutation;
    variables: CustomerUpdateMutationVariables;
  };
  '#graphql\n  mutation customerActivate($id: ID!, $input: CustomerActivateInput!) {\n    customerActivate(id: $id, input: $input) {\n      customer {\n        id\n        email\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerActivateMutation;
    variables: CustomerActivateMutationVariables;
  };
  '#graphql\n  mutation customerCreate(\n    $input: CustomerCreateInput!,\n    $country: CountryCode,\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    customerCreate(input: $input) {\n      customer {\n        id\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerCreateMutation;
    variables: CustomerCreateMutationVariables;
  };
  '#graphql\n  mutation registerLogin(\n    $input: CustomerAccessTokenCreateInput!,\n    $country: CountryCode,\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    customerAccessTokenCreate(input: $input) {\n      customerUserErrors {\n        code\n        field\n        message\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n    }\n  }\n': {
    return: RegisterLoginMutation;
    variables: RegisterLoginMutationVariables;
  };
}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
