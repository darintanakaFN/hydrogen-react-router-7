export const CUSTOMER_FRAGMENT = `#graphql
fragment Customer on Customer {
    id
    acceptsMarketing
    addresses(first: 100) {
        nodes {
            ...Address
        }
    }
    defaultAddress {
        ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
    id
    vitals: metafield(namespace: "myaccount", key: "vitals") {
        id
        value
    }

}
fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
    countryCode: countryCodeV2
}
` as const;
