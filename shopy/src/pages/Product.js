import React from "react"
import addItemToCart from "../utils/addItemToCart";
import Header from "../components/header"

const DisplayProduct=({location})=>{
   
    console.log(location)

    return(
        <div>
      <div className="container align-items-center">
  <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={location.state.product.image} class="card-img" alt={location.state.product.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">{location.state.product.title}</h2>
        <h2 className="card-title">
                <span class="badge badge-secondary">{location.state.product.brand}</span>
        </h2>
        <p className="card-text">{`Price: $${location.state.product.price}`}</p>
        <button className="btn btn-primary" onClick={() =>addItemToCart(location.state.product)}>Add to cart</button>
      </div>
    </div>
  </div>
</div>
        </div>
      
        </div>
        
    )
}

export default DisplayProduct;