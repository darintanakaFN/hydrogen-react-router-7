import {IMAGE_FRAGMENT} from "@shopify/hydrogen";

export const COLLECTION_FRAGMENT = `#graphql
${IMAGE_FRAGMENT}
fragment Collection on Collection {
    id
    title
    handle
    image {
        ...Image
    }
}` as const;
