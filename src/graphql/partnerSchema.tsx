export const getPartners = `
  query {
    partner {
      data{
        attributes{
          item{
            name
            image {
              data {
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
  }`;
