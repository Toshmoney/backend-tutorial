import React, { useState } from 'react'

const GetUser = () => {
    const [user, setUser] = useState({})
    const [foundUser, setFoundUser] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch("http://localhost:1200/user", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(user)
    
        })

        if(response.ok){
            setFoundUser(true)
        }
    }

    if(foundUser){
        return(
            <div>
                
            </div>
        )
    }
  return (
    <div>
        <form >
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name='email' onChange={e => setUser(e.target.value)} />
                <button>Get User</button>
            </div>
        </form>
    </div>
  )
}

export default GetUser