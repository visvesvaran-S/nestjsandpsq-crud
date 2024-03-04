import React from "react";
import { useState} from "react";
import axios from 'axios'

function Form() {

const [formData,setFormData] = useState({
    studentname:"",
    dob:"",
    age:"",
    createrusername:"",
    subjectone:"",
    markone:"",
    subjecttwo:"",
    marktwo:""
})


const handelChange = (e)=>{
    console.log("targetcreatedUsername",e.target.name)
    var name = e.target.name ? e.target.name : e.name;
    console.log(name);
    switch(name){
        case "studentname":
            setFormData((prevData)=>({
                ...prevData,
                studentname:e.target.value
            }));
            break;
            case "dob":
            setFormData((prevData)=>({
                ...prevData,
                dob:e.target.value
            }));
            break;
            case "age":
            setFormData((prevData)=>({
                ...prevData,
                age:e.target.value
            }));
            break;
            case "createrusername":
            setFormData((prevData)=>({
                ...prevData,
                createrusername:e.target.value
            }));
            break;
            case "subjectone":
            setFormData((prevData)=>({
                ...prevData,
                subjectone:e.target.value
            }));
            break;
            case "markone":
            setFormData((prevData)=>({
                ...prevData,
                markone:e.target.value
            }));
            break;
            case "subjecttwo":
            setFormData((prevData)=>({
                ...prevData,
                subjecttwo:e.target.value
            }));
            break;
            case "marktwo":
            setFormData((prevData)=>({
                ...prevData,
                marktwo:e.target.value
            }));
            break;
    }
    console.log(formData);
}

let item = {formData}
console.log("item user",item);
const handelSubmit = (e)=>{
    e.preventDefault()
    console.log(formData);
    axios.post("http://localhost:3000/api/form",item.formData).then(function(respose){
        console.log(respose.data);
        alert ("this data add sucessfully")
        window.open("http://localhost:4000/show","_self")
    })

}
    return (
        <section className="">
            <div className="container mx-auto mt-8 h-[100vh] ">
                <h3 className="text-center font-bold text-2xl"> student mark list </h3>
                <form onSubmit={handelSubmit}  className="max-w-md mx-auto bg-white p-8 rounded   shadow-md">
                    <div className="mb-4">
                        <label htmlFor="studentname"
                            className="block text-gray-600 font-semibold mb-2">

                            Student Name
                        </label>
                        <input
                            type="text"
                            id="studentname"
                            name="studentname"
                            onChange={(e)=>handelChange(e)}
                            // value={formData?.studentname}
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
                            name="dob"
                            onChange={(e)=>handelChange(e)}
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
                            onChange={(e)=>handelChange(e)}
                            name="age"
                            className="w-full p-2 border rounded"
                            required
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="createrusername"
                            className="block text-gray-600 font-semibold mb-2">
                            Created User Name
                        </label>
                        <input
                            type="text"
                            id="createrusername"
                            name="createrusername"
                            onChange={(e)=>handelChange(e)}
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
                            onChange={(e)=>handelChange(e)}
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
                            onChange={(e)=>handelChange(e)}
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
                            onChange={(e)=>handelChange(e)}
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
                            onChange={(e)=>handelChange(e)}
                            className="w-full p-2 border rounded"
                            required
                        />

                    </div>
                    <div className="flex
                     justify-center">
                    <button 
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded flex jusity-center px-6" 
                    >Submit </button>
                    </div>

                </form>


            </div>
        </section>
    )
}


export default Form;