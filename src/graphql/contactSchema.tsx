export const getContact = `query {
    contact {
      data {
        attributes {
          legal_support
          psychological_support
          head_organization
          email
        }
      }
    }
}`;
