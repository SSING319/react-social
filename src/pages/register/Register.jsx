import React from 'react'
import "./register.css"

export default function Register() {
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
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">SignUp</button>
                    <button className="loginRegisterButton">Login into account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
