import {Redirect, Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
    activeUser: '',
  }

  onInput = event => this.setState({username: event.target.value})

  onPassword = event => this.setState({password: event.target.value})

  submitForm = event => {
    event.preventDefault()
    this.getRegisterDetails()
  }

  onSuccessApi = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 1})
    history.replace('/')
  }

  getUsername = name => {
    const {onUsername} = this.props
    console.log(this.props)
    onUsername(name)
  }

  getRegisterDetails = async () => {
    const {username, password} = this.state
    const loginDetails = {username, password}
    const loginUrl = 'http://localhost:3006/login/'
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(loginUrl, options)

    const data = await response.json()
    if (data.status_code === 400) {
      this.setState({errorMsg: data.error_msg, isError: true})
    } else {
      this.onSuccessApi(data.jwtToken)
    }
  }

  render() {
    const getToken = Cookies.get('jwt_token')
    if (getToken !== undefined) {
      console.log(getToken)
      return <Redirect to="/" />
    }
    console.log(getToken)
    const {username, isError, errorMsg, activeUser} = this.state
    console.log(activeUser)

    return (
      <div className="register">
        <div className="login-container">
          <h1 className="login-top-heading">Sign In</h1>
          <img
            className="login-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="register-img"
          />
          <div className="login-form-field">
            <h1 className="register-heading">Sign In</h1>
            <form className="register-form" onSubmit={this.submitForm}>
              <label htmlFor="userInput" className="input-label">
                EMAIL
              </label>
              <input
                placeholder="Email"
                className="login-input"
                onChange={this.onInput}
                value={username}
                id="userInput"
              />

              <label htmlFor="passwordInput" className="input-label">
                PASSWORD
              </label>
              <input
                placeholder="Password"
                className="login-input login-password"
                type="password"
                onChange={this.onPassword}
                id="passwordInput"
              />

              <button
                onClick={this.loginSubmitBtn}
                type="submit"
                className="login-btn"
              >
                Login
              </button>
              {isError && (
                <p className="register-error-msg blur-msg login-error">
                  {errorMsg}
                </p>
              )}
            </form>

            <p className="not-register-txt">
              Not Registered yet?{' '}
              <Link to="/register">
                <span className="register-here-txt">Register Here!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
