import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



      export default  function Home(){

        const navi =useNavigate()
        const token =localStorage.getItem ("token")
        console.log(token)
        useEffect(()=>{
            if(token){
                axios.get("http://localhost:4005/",{headers:{
                    "authorization" :`Bearer ${token}`
                }})
                .then((response)=>console.log(response.data))
            }
            else{
                navi("/login")
            }
        },[token,navi])
        const handleClick=()=>{
            localStorage.removeItem("token")
            navi("/login")
        }

            return(

                <div>
                    Home Page
                    <button onClick={handleClick}>Logout</button>
                </div>
            )
        }