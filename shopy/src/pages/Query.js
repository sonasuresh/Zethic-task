import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  query allStrapiProduct {
    products {
        id
        title
        brand
        price
        image
    }
  }
`;

export default GET_PRODUCTS;