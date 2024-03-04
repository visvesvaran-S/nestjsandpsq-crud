import React from "react";
import { useState,useEffect} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Edit(){
    const id = useParams()

    const[editData,setEditdata]=useState({
    studentname:"",
    dob:"",
    age:"",
    updateusername:"",
    subjectone:"",
    markone:"",
    subjecttwo:"",
    marktwo:""
    })


    const fetchData = async ()=>{
        try{
            axios.get(`http://localhost:3000/api/form/${id.id}`)
            .then(function(response){
                setEditdata(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

useEffect(()=>{
    fetchData()
},[id.id])

console.log(editData);


    const handelInputChange = (e)=>{
        console.log("targetcreatedUsername",e.target.name)
        var name = e.target.name ? e.target.name : e.name;
        console.log(name);
        switch(name){
            case "studentname":
                setEditdata((prevData)=>({
                    ...prevData,
                    studentname:e.target.value
                }));
                break;
                case "dob":
                setEditdata((prevData)=>({
                    ...prevData,
                    dob:e.target.value
                }));
                break;
                case "age":
                setEditdata((prevData)=>({
                    ...prevData,
                    age:e.target.value
                }));
                break;
                case "updateusername":
                setEditdata((prevData)=>({
                    ...prevData,
                    updateusername:e.target.value
                }));
                break;
                case "subjectone":
                setEditdata((prevData)=>({
                    ...prevData,
                    subjectone:e.target.value
                }));
                break;
                case "markone":
                setEditdata((prevData)=>({
                    ...prevData,
                    markone:e.target.value
                }));
                break;
                case "subjecttwo":
                setEditdata((prevData)=>({
                    ...prevData,
                    subjecttwo:e.target.value
                }));
                break;
                case "marktwo":
                setEditdata((prevData)=>({
                    ...prevData,
                    marktwo:e.target.value
                }));
                break;
        }
        console.log(editData);
    }



let item = {editData}
    const handelSubmit = (e)=>{
     e.preventDefault();
     try{
axios.patch(`http://localhost:3000/api/form/${id.id}`, item.editData)
.then(function(response){
    console.log("updated sucessfully");
console.log(response.data);
window.open("http://localhost:4000/show","_self")
})
     }catch(error){
        console.log(error);
     }

    }
return(
    <section className="">
    <div className="container mx-auto mt-8 h-[100vh] ">
        <h3 className="text-center font-bold text-2xl"> Edit Student Mark list </h3>
        <form onSubmit={handelSubmit} className="max-w-md mx-auto bg-white p-8 rounded   shadow-md">
            <div className="mb-4">
                <label htmlFor="studentname"
                    className="block text-gray-600 font-semibold mb-2">

                   Student Name
                </label>
                <input
                    type="text"
                    id="studentname"
                    name="studentname"
                    value={editData.studentname}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="dob"
                    className="block text-gray-600 font-semibold mb-2">
                    Date of Birth
                </label>
                <input
                    type="text"
                    id="dob"
                    value={editData.dob}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="age"
                    className="block text-gray-600 font-semibold mb-2">

                   Age
                </label>
                <input
                    type="text"
                    id="age"
                    value={editData.age}
                    onChange={handelInputChange}
                    name="age"
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="updateusername"
                    className="block text-gray-600 font-semibold mb-2">
                    Updated User Name
                </label>
                <input
                    type="text"
                    id="updateusername"
                    name="updateusername"
                    value={editData.updateusername}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="subjectone"
                    className="block text-gray-600 font-semibold mb-2">

            Subject One
                </label>
                <input
                    type="text"
                    id="subjectone"
                    name="subjectone"
                    value={editData.subjectone}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="markone"
                    className="block text-gray-600 font-semibold mb-2">

                  Mark One
                </label>
                <input
                    type="text"
                    id="markone"
                    name="markone"
                    value={editData.markone}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="subjecttwo"
                    className="block text-gray-600 font-semibold mb-2">

                   Subject Two
                </label>
                <input
                    type="text"
                    id="subjecttwo"
                    name="subjecttwo"
                    value={editData.subjecttwo}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="mb-4">
                <label htmlFor="marktwo"
                    className="block text-gray-600 font-semibold mb-2">

                   Mark two
                </label>
                <input
                    type="text"
                    id="marktwo"
                    name="marktwo"
                    value={editData.marktwo}
                    onChange={handelInputChange}
                    className="w-full p-2 border rounded"
                    required
                />

            </div>
            <div className="flex
             justify-center">
            <button 
            type="submit"
            className="bg-blue-500 text-white p-2 rounded flex jusity-center px-6"
            onClick={handelSubmit}
            >Submit </button>
            </div>
        </form>


    </div>
</section>
)
}


export default Edit;