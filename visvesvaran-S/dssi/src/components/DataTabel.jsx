import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Modal from "react-modal";

Modal.setAppElement('#root')
function DataTabel() {


const custumcss = {
    content:{
        top:"50%",
        left:"50%",
        bottom:"auto",
        marginRight:"-50%",
        transform:"translate(-50%,-50%)",
        width:"100%",
        height:"100vh",
        maxHeight:"70vh",
        maxWidth:"23rem"
    }
}

    const [data, setData] = useState([]);
   const [isModelOpen,setModelOpen] = useState(false);
   const [singleData,setSingleData] = useState([])

  
 


    const getUser = () => {
        axios.get('http://localhost:3000/api/form').then(function (response) {
            setData(response.data)
        }).catch(error => console.log("error on fetching data", error))
    }

    useEffect(() => {
        getUser()
    }, [])


    console.log(data);
    const handelDelet = async (id) => {
        console.log(id);
        try {
            axios.delete(`http://localhost:3000/api/form/${id}`)
                .then(function (response) {
                    getUser()
                    alert ("this data deletd sucessfully")
                    console.log(id);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })

        } catch (error) {
            console.log(error);
        }
    }


const handelnNvigateEdit = (id)=>{
    console.log(id);
    window.open(`http://localhost:4000/edit/${id}`,"_self")
}


const openModel = (id)=>{
    console.log(id);
    setModelOpen(!isModelOpen)
    try {
        axios.get(`http://localhost:3000/api/form/${id}`)
            .then(function (response) {
                console.log(response.data);
                setSingleData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }
   }


   const closeModel = ()=>{
    setModelOpen(!isModelOpen)
   }

    return (
        <div className="p-3">
            <table className="border-2 w-[100%] ">
                <thead>
                    <tr className="border-2">
                        <th className="p-3 border-r-2">NAME</th>
                        <th className="p-3 border-r-2">DOB</th>
                        <th className="p-3 border-r-2">AGE</th>
                        <th className="p-3 border-r-2">CREATE USER</th>
                        <th className="p-3 border-r-2">UPDATE USER</th>
                        <th className="p-3 border-r-2">SUBJECT ONE</th>
                        <th className="p-3 border-r-2">MARK ONE</th>
                        <th className="p-3 border-r-2">SUBJECT TWO</th>
                        <th className="p-3 border-r-2">MARK TWO</th>
                        <th className="p-3 border-r-2">VIEW</th>
                        <th className="p-3 border-r-2">EDIT</th>
                        <th className="p-3 ">DELET</th>
                    </tr>
                </thead>
                <tbody className="border-2">
                    {data.map(item => (
                        <tr key={item.id} className="border-2">
                            <td className="p-3 border-r-2 text-center">{item.studentname}</td>
                            <td className="p-3 border-r-2 text-center">{item.dob}</td>
                            <td className="p-3 border-r-2 text-center">{item.age}</td>
                            <td className="p-3 border-r-2 text-center">{item.createrusername}</td>
                            <td className="p-3 border-r-2 text-center">{item.updateusername}</td>
                            <td className="p-3 border-r-2 text-center">{item.subjectone}</td>
                            <td className="p-3 border-r-2 text-center">{item.markone}</td>
                            <td className="p-3 border-r-2 text-center">{item.subjecttwo}</td>
                            <td className="p-3 border-r-2 text-center">{item.marktwo}</td>
                            <td className="p-3 border-r-2 text-center " ><button onClick={()=>openModel(item.id)}> <FaEye /></button></td>
                            <td className="p-3 border-r-2 text-center"> <button onClick={()=>handelnNvigateEdit(item.id)}><CiEdit /></button></td>
                            <td className="p-3 border-r-2 text-center" > <button onClick={(e) => handelDelet(item.id)}> <MdDelete /> </button> </td>
                        </tr>
                    ))}

                </tbody>
            </table>


  <Modal
  isOpen={isModelOpen}
  onRequestClose={closeModel}
  style={custumcss}
  >
    <div className="relative">
<div className="top-0 right-0 p-1 rounded-lg text-center absolute font-bold border bg-[red] cursor-pointer border-slate-200 text-white" onClick={closeModel}>
X
</div>


{/* {  singleData?.map((item)=>( */}
    <div key={singleData.id} className="flex flex-col justify-center" >
<div className="font-bold p-2"> Name : <span className="font-medium">{singleData.studentname}</span> </div>
<div className="font-bold p-2"> DOB : <span className="font-medium">{singleData.dob}</span></div>
<div className="font-bold p-2"> AGE : <span className="font-medium">{singleData.age}</span> </div>
<div className="font-bold p-2"> CREATE USER : <span className="font-medium">{singleData.createrusername}</span> </div>
<div className="font-bold p-2"> UPDATE USER : <span className="font-medium">{singleData.updateusername}</span> </div>
<div className="font-bold p-2"> SUBJECT ONE : <span className="font-medium">{singleData.subjectone}</span> </div>
<div className="font-bold p-2"> MARK ONE : <span className="font-medium">{singleData.markone}</span> </div>
<div className="font-bold p-2"> SUBJECT TWO : <span className="font-medium">{singleData.subjecttwo}</span> </div>
<div className="font-bold p-2"> MARK TWO : <span className="font-medium">{singleData.marktwo}</span> </div>

    </div>

{/* ))} */}
    </div>
  </Modal>
        </div>
    )
}


export default DataTabel;