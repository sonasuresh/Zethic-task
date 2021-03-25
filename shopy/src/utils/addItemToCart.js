import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
export default function addItemToCart(product) {
    try {
      let productId=product.id.substr(product.id.length - 1)
      const res = fetch(`http://localhost:1337/cartitems/`, {
        method: "POST",
        body: JSON.stringify({
          productId:productId,
          quantity:1  
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  
}




const CART_MUTATION = gql`
  mutation CartitemMutation($description: String!, $url: String!) {
    cartitem(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`
