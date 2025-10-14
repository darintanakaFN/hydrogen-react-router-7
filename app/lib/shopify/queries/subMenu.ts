export type CollectionMenuData = {
  id: string;
  items: CollectionMenuItem[];
};

export interface CollectionMenu {
  menu: CollectionMenuData;
}

export interface CollectionMenuItem {
  id: string;
  title: string;
  url: string;
}

export const SUBMENU_QUERY = `#graphql
query getMenu(
    $handle: String!,
    $country: CountryCode,
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    menu(handle: $handle) {
        id
        items {
            id
            title
            url
        }
    }
}` as const;
