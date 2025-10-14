export const IMAGE_FRAGMENT = `#graphql
fragment Image on Image {
    __typename
    id
    altText
    url
    width
    height
}` as const;
