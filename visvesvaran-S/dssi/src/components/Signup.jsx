import React from "react";
import { useState } from "react";
import axios from 'axios'
function Signup() {
    const [signupdata, setSignindata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const [errodata, setErrodata] = useState({})

    const handelChange = (e) => {
        // console.log(e.target.value); 
        let name = e.target.name ? e.target.name : e.name

        switch (name) {
            case "name":
                setSignindata((prevdata) => ({
                    ...prevdata,
                    name: e.target.value
                }))
                break;
            case "email":
                setSignindata((prevdata) => ({
                    ...prevdata,
                    email: e.target.value
                }))
                break;
            case "password":
                setSignindata((prevdata) => ({
                    ...prevdata,
                    password: e.target.value
                }))
                break;
            case "confirmpassword":
                setSignindata((prevdata) => ({
                    ...prevdata,
                    confirmpassword: e.target.value
                }))
                break;
        }
        // console.log(signupdata);
    }

    let item = { signupdata }

    // console.log(item);

    const handelSubmit = async (e) => {
        e.preventDefault();
        let formError = {}

        if (!signupdata.name.trim()) {
            formError.name = "name is required"
        }
        else if (!signupdata.email.trim()) {
            formError.email = " email is required"
        }
        else if (!signupdata.password.trim()) {
            formError.password = "password id required"

        }
        else if (!signupdata.confirmpassword.trim()) {
            formError.confirmpassword = "confirm paword is required"
        }
        else if (signupdata.confirmpassword.trim() !== signupdata.password.trim()) {
            formError.confirmpassword = "password miss match"
        }

        console.log(signupdata);

        setErrodata(formError)

        if (Object.keys(formError).length === 0) {


            axios.post('http://localhost:3000/api/user/sign-up', item.signupdata)
                .then(function (respose) {
                    alert("sign-up sucessfully")
                    console.log(` data send or login sucessfully ${respose}`);
                    window.open('http://localhost:4000/form', '_self')

                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            return
        }
    }

    return (
        <section className="flex justify-center  bg-zinc-200 ">
            <div className=" flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 w-[50%]">
                <div className="">
                    <a href="/" >
                        <h3 className="text-5xl font-bold text-indigo-500">
                            Sign-up
                        </h3>

                    </a>
                </div>

                <div className="w-full px-6 py-4 mt-6 overflow-hidden  bg-slate-100 shadow-md sm:mx-w-md sm:rounded-lg bg-slate-100/60 backdrop-blur-md" >
                    <form onSubmit={handelSubmit}>
                        <div>
                            <label htmlFor="name"
                                className="block text-lg font-medium text-gray-700 undefiend"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-black-800 rounded-md shadow-md focus:border-indigo-300 focus:ring-4 focus:ring-indigo-700 focus:ring-opactiy-50 text-lg"
                                    onChange={(e) => handelChange(e)}
                                />
                                {errodata.name && <span className="text-red-700">{errodata.name}</span>}
                            </div>
                        </div>


                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-gray-700 undefiend">
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="email"
                                    id="email"
                                    name="email"

                                    className="block w-full mt-1 border-black-800 rounded-md shadow-md focus:border-indigo-300 focus:ring-4 focus:ring-indigo-700 focus:ring-opactiy-50 text-lg"
                                    onChange={(e) => handelChange(e)}
                                />
                                {errodata.email && <span className="text-red-700">{errodata.email}</span>}

                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-gray-700 undefiend">
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="pasword"
                                    id="password"
                                    name="password"
                                    className="block w-full mt-1 border-black-800 rounded-md shadow-md focus:border-indigo-300 focus:ring-4 focus:ring-indigo-700 focus:ring-opactiy-50 text-lg"
                                    onChange={(e) => handelChange(e)}
                                />
                                {errodata.password &&
                                    <span className="text-red-700">{errodata.password}</span>}
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="confirmpassword"
                                className="block text-lg font-medium text-gray-700 undefiend">
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="pasword"
                                    id="confirmpassword"
                                    name="confirmpassword"

                                    className="block w-full mt-1 border-black-800 rounded-md shadow-md focus:border-indigo-300 focus:ring-4 focus:ring-indigo-700 focus:ring-opactiy-50 text-lg"
                                    onChange={(e) => handelChange(e)}
                                />
                                {errodata.confirmpassword && <span className="text-red-700">{errodata.confirmpassword}</span>}
                            </div>
                        </div>


                        <div className="mt-8 flex items-center justify-center mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 ml-4 text-lg font-semibold tracking-widest text-white  transistion duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"

                            >
                                submit
                            </button>


                        </div>
                    </form>
                    <p className="mt-8 text-sm  text-center text-gray-700 font-semibold">
                        aleady have an account?
                        <a href="/signin"
                            className="font-bold  pl-2 text-lg text-purple-600 hover:underline">

                            Sig-in
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}


export default Signup;