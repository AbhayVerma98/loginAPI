import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)


    const loginHandler = (e)=>
    {
        e.preventDefault()
        console.log(email, password);
        let data = {
            "email":email,
            "password":password
        }
        fetch("https://api-touku.angelium.net/api/xchat/api-token-auth-touku/",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        }
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if(data.token)
            {
                localStorage.setItem("token",data.token)
                navigate("/home")

            }
            else
            {
                setError(true)
            }
        });
        
        // axios.post("https://api-touku.angelium.net/api/xchat/api-token-auth-touku/",data)
        // .then((data)=> console.log(data))
        // .catch((error)=> console.error("error occered"))
    }
  return (

    <>
    <center><h1>Login page</h1></center>
    <div className='m-5 p-3'>
        <div className='mb-3'>
            <label className='form-label'>
                Email id
            </label>
            <input type="text" value={email} name="email" className='form-control'
            placeholder='Enter your email id' 
            onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>
                Password
            </label>
            <input type="password" value={password} name="password" className='form-control'
            placeholder='Enter your password'
            onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        
        <div className='my-3'>
            
            <button className="btn btn-success" onClick={loginHandler}>Login</button>
        </div>

        {error && 
             <div class="alert alert-danger" role="alert">
                 Incorrect email or password !
             </div>
         
        }
        
        

       
    </div>
    </>
  )
}

export default Login
