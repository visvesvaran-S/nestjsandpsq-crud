import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Signup from "./Signup";
import Signin from "./Signin";
import Form from "./Form";
import ShowPage from "./ShowPage";
import Edit from "./Edit";


function PageRoute(){
return(
    <div>
 <BrowserRouter>
 <Routes>
<Route exact path ="/" element={<Signup />} />
<Route path="/signin" element={ <Signin />} />
<Route path ="/form" element={ <Form />} />
<Route path = "/show" element={ <ShowPage />} />
<Route path = "/edit/:id" element={<Edit />}  />
 </Routes>
 </BrowserRouter>

    </div>
)
}


export default PageRoute;