import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Cart from '../pages/Cart'


const Navbar = ()=>{
  return(
          <nav className="nav-wrapper">
              <div className="container">
                  <Link to="/" className="brand-logo">Shopy</Link>
                  
                  <ul className="right">
                      <li><Link to="/">Shop</Link></li>
                      <li><Link to="/Cart">My cart</Link></li>
                      <li><Link to="/Cart"><i className="material-icons">shopping_cart</i></Link></li>
                  </ul>
              </div>
          </nav>
 
      
  )
}

export default Navbar;

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     {/* <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//         </h1>
//         <h3 style={{ margin: 0 }}> 
//         <Link
//           to="/Cart"
//           style={{
//             marginLeft:'34em',
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >  
//         Cart
//         </Link>
//       </h3>
  
//         </div>*/}
//         <nav>
//   <h1 class="navbar-brand"  style={{color: `white`}}>SHOPY</h1>
//   <form class="form-inline" style={{float:"right",marginRight:"30px"}} >
//     <Link to="/Cart" style={{color: `white`}}><b>Cart</b></Link>
//   </form>
// </nav>
//   </header> 
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
