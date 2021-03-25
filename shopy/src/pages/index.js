import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import addItemToCart from "../utils/addItemToCart"
import GET_PRODUCTS from "./Query"

const IndexPage = ({ data }) => {
  let itemList = data.events.nodes.map(item=>{
    return(
        <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.image} alt={item.title}/>
                    <span className="card-title">{item.brand}</span>&nbsp;
                    <span className="card-title">{item.title}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => addItemToCart(item)}><i className="material-icons">add</i></span>
                </div>

                <div className="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
         </div>

    )
})

  return (
    <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
  )
}



export default IndexPage

export const PageQuery = graphql`
  {
    events: allStrapiProduct {
      nodes {
        id
        title
        brand
        price
        image
      }
    }
  }
`