import React, { useEffect } from 'react'
import Form from './Form'
import { useNavigate } from "react-router-dom";

const Home = () => {
    
    function logout()
    {
      localStorage.clear()
      navigate("/")
    }

    let navigate = useNavigate();
    useEffect(()=>{
        let token=localStorage.getItem("token")
        if(token===undefined)
        {
            navigate("/")
        }
    },[navigate])

  return (
    <>
    <center>
    <div><h1>Welcome to Home page</h1></div>
    <Form/>
    <div className='my-3' >
            
            <button className="btn btn-warning d-block" style={{marginTop:"100px"}} onClick={logout}>Logout</button>
          
        </div>
    </center>
    </>
  )
}

export default Home