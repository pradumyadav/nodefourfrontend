import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

import "./Apply.css"
import Home from "./Home";

   export default function Combination (){
        return(

            <div>
                <div>
                    <Link  to="/">Home</Link>
                <Link className="register" to="/register">Register</Link>
                <Link className="login"to="/login">Login</Link>
                </div>
                    <Routes>
                        <Route paath="/" element={<Home/>}></Route>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        
                    </Routes>

                {/* <Register/>
                <Login/> */}
            </div>
        )
    }