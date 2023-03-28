import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social</h3>
                <span className="loginDesc">New G Social Media</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginButton">LogIn</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
