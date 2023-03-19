// Write your JS code here
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  state = {activeUsername: '', cartItemCount: 0}

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {activeUsername, cartItemCount} = this.state

    return (
      <nav className="nav-container">
        <h1 className="website-title-heading">
          <span className="title-pre-heading">Social </span>Media App
        </h1>
        <ul className="nav-items-list">
          <Link className="nav-link" to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link className="nav-link" to="/product">
            <li className="nav-item">All Contents</li>
          </Link>
          <Link className="nav-link" to="/create-content">
            <li className="nav-item">Create Content</li>
          </Link>
        </ul>

        <div className="login-register-list">
          <select
            className="user-data"
            value={activeUsername}
            // onChange={this.renderProducts}
          >
            <option>Hi, {activeUsername}</option>
            <option value="products">Your Products</option>
            <option value="Change Password">Change Password</option>
            <option>Contact Us</option>
            <option>About</option>
          </select>
          <button type="button" className="logout-btn" onClick={this.onLogout}>
            Logout
          </button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
