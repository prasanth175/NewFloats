// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Products = props => {
  const getToken = Cookies.get('jwt_token')
  const {history} = props
  if (getToken === undefined) {
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </>
  )
}

export default Products
