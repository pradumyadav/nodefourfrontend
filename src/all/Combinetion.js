import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

import "./Apply.css"
import Home from "./Home";

   export default function Combination (){
        return(

            <div>
                <div className="navbar">
                    <Link  to="/">Home</Link>
                <Link className="register" to="/register">Register</Link>
                <Link className="login"to="/login">Login</Link>
                </div>
                    <Routes>

                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        
                    </Routes>
             
            </div>
        )
    }