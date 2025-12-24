import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [Username,setusername] = useState('');
    const [password,setpassword] = useState('');

    const {Setuser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        Setuser({Username , password})
    }
    return(
       <div>
        <input type="text"
       placeholder="Username"
       value={Username}
       onChange={(e)=>{
        setusername(e.target.value)
       }}
        />
        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value)
        }}
        />

        <button onClick={handleSubmit} >Submit</button>
       </div>
       

       
       
    )
}

export default Login