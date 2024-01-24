// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', err: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.goToLoginPage()
    } else {
      const errorMsg = data.error_msg
      this.setState({err: errorMsg})
    }

    this.setState({username: '', password: ''})
  }

  goToLoginPage = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {username, password, err} = this.state

    return (
      <div className="login">
        <img
          className="l-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.onSubmitForm} className="form">
          <img
            className="f-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="inp">
            <label htmlFor="username">USERNAME</label>
            <input
              onChange={this.onChangeUsername}
              placeholder="Username"
              type="text"
              id="username"
              value={username}
            />
          </div>
          <div className="inp">
            <label htmlFor="password">PASSWORD</label>
            <input
              onChange={this.onChangePassword}
              placeholder="Password"
              type="password"
              id="password"
              value={password}
            />
          </div>
          <button type="submit" className="btn in-btn">
            Login
          </button>
          {err.length > 1 && <p className="e">*{err}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
