import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
          <div>
              <p>Login</p>
              <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input type="number" name="password" />
              </form>
          </div>
        );
    }
}
