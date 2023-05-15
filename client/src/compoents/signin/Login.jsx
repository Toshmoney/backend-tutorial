import React from 'react'

const Login = () => {
  return (
    <div>
        <form>

            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder='username' name='username' />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='email' name='email' />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='password' name='password' />
            </div>

            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Login;