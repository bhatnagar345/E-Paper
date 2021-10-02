import React from "react";
import Apps from "../paper/Apps";
import {BrowserRouter} from 'react-router-dom';
const Hero =({handleLogout})=>{
    return(
        <BrowserRouter>
       <Apps handleLogout={handleLogout}/>
       </BrowserRouter>
    )

}

export default Hero;