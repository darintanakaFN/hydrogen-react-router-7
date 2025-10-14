export const PRODUCT_OPTIONS_FRAGMENT = `#graphql
fragment ProductOptions on ProductOption {
    name
    optionValues {
        name
    }
}`;
