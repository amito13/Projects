import React, { useEffect, useState } from "react";

function Git(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/amito13')
            .then(Response=> Response.json())
            .then(data=>{
                console.log(data)
                setdata(data)
            })
    })
    
    return(
fetch('https://api.github.com/users/amito13')
            .then(Response=> Response.json())
            .then(data=>{
                console.log(data)
                setdata(data)
            })
    )
}

export default Git