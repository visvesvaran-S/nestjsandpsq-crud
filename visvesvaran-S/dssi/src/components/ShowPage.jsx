import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import DataTabel from "./DataTabel";
import NavHeader from "./NavHeader";
function ShowPage(){

 const [data,setData] = useState(null)
return(
    <div className="">
        <NavHeader/>
    <DataTabel/>
</div>
)
}


export default ShowPage;