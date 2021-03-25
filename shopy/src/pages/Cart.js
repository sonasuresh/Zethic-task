import React, { useEffect,useState } from 'react';
import { Link ,graphql} from "gatsby"


const CartScreen = ({data}) => {
    console.log(data)
//   async function fetchCart() {
//     const res = await fetch("http://localhost:4000/cart");
//     res
//       .json()
//       .then((res) => {
//         console.log(res.data.items);
//         setCarts(res.data.items);
//         setPayloader(res.data);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }
  const increaseQty=(id,qty)=> {
    try {
        id=id.substr(id.length - 1)
      const res = fetch(`http://localhost:1337/cartitems/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          quantity:qty+1   
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
  const decreaseQty=(id,qty)=> {
    try {
        id=id.substr(id.length - 1)
      const res = fetch(`http://localhost:1337/cartitems/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          quantity:qty-1   
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
  const handleRemove=(id)=>{
    try {
        id=id.substr(id.length - 1)
      const res = fetch(`http://localhost:1337/cartitems/${id}`, {
        method: "DELETE",
       
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      PageQuery()
      console.log(res);
    } catch (err) {
      console.log(err);
    }  
  }

  let addedItems=data.events.nodes.map(item=>{
    return(
       
        <li className="collection-item avatar" key={item.id}>
                    <div className="item-img"> 
                        <img src={item.productId.image} alt={item.productId.title} className=""/>
                    </div>
                
                    <div className="item-desc">
                        <span className="title">{item.productId.title}</span>
                        <p>{item.productId.brand}</p>
                        <p><b>Price: {item.productId.price}$</b></p> 
                        <p>
                            <b>Quantity: {item.quantity}</b> 
                        </p>
                        <div className="add-remove">
                            <i className="material-icons" onClick={()=>{increaseQty(item.id,item.quantity)}}>arrow_drop_up</i>
                            <i className="material-icons" onClick={()=>{decreaseQty(item.id,item.quantity)}} >arrow_drop_down</i>
                        </div>
                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(item.id)}}>Remove</button>
                    </div>
                    
                </li>
         
    )
})
  return (
      <div>
               
      
        
        <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
            </div>


    </div>)
    
};
export default CartScreen;
export const PageQuery = graphql`
{
  events: allStrapiCartitems {
    nodes {
        id
        quantity
        productId {
          brand
          id
          image
          title
          price
          updated_at
        }
      }
  }
}
`


