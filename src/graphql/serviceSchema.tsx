export const getService = `
query {
    service {
     data {
      attributes {
        serviceItem {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
   }
}`