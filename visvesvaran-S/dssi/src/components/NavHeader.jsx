import React from "react";

function NavHeader(){

const handellogout = ()=>{
    window.open("http://localhost:4000","_self")
}
const handeladd = ()=>{
    window.open("http://localhost:4000/form","_self")
}
    return(
        <div className=" p-3">
            <nav className="w-[100%]  flex justify-end pr-5 gap-6">
                <div className=""><button type="button" className="px-4 bg-indigo-500 text-white rounded-full" onClick={handeladd} >Add New</button></div>
                <div className="font-semibold  hover:underline underline-offset-8 " onClick={handellogout}> Logout</div>
            </nav>
  
        </div>
    )
}

export default NavHeader;