export const getLocation = `
query {
    location {
      data {
        attributes {
          locationItem {
            city
            address
            phone
            locationLink
          }
        }
      }
    }
}`;
