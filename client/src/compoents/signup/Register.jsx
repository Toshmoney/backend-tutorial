import React, { useState } from 'react'

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        email: ""
    })

    const handleUserDetails = async(e)=>{
        const {value, name} = e.target;
        setUserDetails((prevDetails)=>{
            if(name === "username"){
                return{
                    username:value,
                    email:prevDetails.email,
                    password: prevDetails.password
                }
            }else if (name === "password"){
                return{
                    username: prevDetails.username,
                    password: value,
                    email: prevDetails.email
                }
            }
            else if (name === "email"){
                return{
                    username: prevDetails.username,
                    password: prevDetails.password,
                    email: value,
                }
            }
        })
    }

    const handleRegister = async(event)=>{
        event.preventDefault();
        const url = "http://localhost:1200/register"
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(userDetails),
                headers:{"Content-Type": "application/json"},
            });
            if(response.ok){
                alert("Successfully registered!")
                setUserDetails({
                    username: "",
                    password: "",
                    email: ""
                })
            }
        } catch (error) {
            console.log(error);
        }

        
    }

  return (
    <div>
        <h2>Regsiter Page</h2>
        <form onSubmit={handleRegister}>

            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder='username' name='username' onChange={handleUserDetails} value={userDetails.username} />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='email' name='email' onChange={handleUserDetails} value={userDetails.email} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='password' name='password' onChange={handleUserDetails} value={userDetails.password} />
            </div>

            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Register;