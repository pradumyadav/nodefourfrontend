
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login (){
            const navi =useNavigate()
            const [data,setData]= useState({
                email:"",
                password:""
            })

            const handlechange=(e)=>{
                setData({...data,[e.target.name]: e.target.value})
            }

            const handleSubmit=(e)=>{
                    e.preventDefault()
                    console.log(data)
                    axios.post("http://localhost:4005/api/login",data)
                   
                    .then((response)=>{
                        alert(response.data.msg)
                        setData(response.data)
                        localStorage.setItem("token",response.data.token)
                        navi("/")

                    })

                    .catch(err=>console.log(err))

                    setData({
                        email:"",
                        password:""
                    })
            }
    return(
        <div className="container">
            <h2>Login</h2>
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" name="email" id="email" value={data.email}placeholder="Enter Email" onChange={handlechange} required/><br/>
            {/* <label htmlFor="password">Passoward</label> */}
            <input type="password" name="password" id="password" value={data.password} placeholder="Enter Passward"onChange={handlechange} required/><br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}