import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Register(){
    const navi =useNavigate()
            const [data,setData]= useState({
                name:"",
                mob:"",
                email:"",
                password:""
            })

            const handlechange=(e)=>{
                setData({...data,[e.target.name]: e.target.value})
            }

            const handleSubmit=(e)=>{
                e.preventDefault()
                console.log(data)
                axios.post("https://nodebackfour.onrender.com/api/register",data)
                .then((response)=>{
                    alert(response.data.msg);
                    setData(response.data);
                localStorage.setItem("token",response.data.token)
                     navi("/")
                })
                
                .catch(err=>console.log(err))
              

                    setData({
                        name:"",
                        mob:"",
                        email:"",
                        password:""
                    })
            }


    return(
        <div className="container">


            <h2>Register</h2>
            {/* <label htmlFor="name">Name</label> */}
            <input className="inp" type="text" name="name" id="name" value={data.name} placeholder="Enter Name" onChange={handlechange} required/><br/>
            {/* <label htmlFor="mob">Mob:</label> */}
            <input className="inp" type="text" name="mob" id="mob"value={data.mob} placeholder="Enter mob" onChange={handlechange} required/><br/>
            {/* <label htmlFor="email">Email</label> */}
            <input className="inp" type="email" name="email" id="email"value={data.email} placeholder="Enter Email" onChange={handlechange} required/><br/>
            {/* <label htmlFor="password">Passoward</label> */}
            <input className="inp" type="password" name="password" id="password" value={data.password} placeholder="Enter Passward"onChange={handlechange} required/><br/>
            <button onClick={handleSubmit}>Register</button>


        </div>
    )
}