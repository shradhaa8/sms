import { useNavigate } from "react-router-dom"
import axios from "axios"

export const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
        width: "70px"
    },
    {
        name: "Full Name",
        selector: (row) => row.s_name,
        sortable: true,
        width: "100px"
    },
    {
        name: "Email",
        selector: (row) => row.email,
        width: "100px"
    },
    {
        name: "Age",
        selector: (row) => row.age,
        width: "100px"
    },
    {
        name: "Course",
        selector: (row) => row.course_enrolled,
        width: "100px"
    },
    {
        name: "Profile Photo",
        selector: (row) => row.image,
        width: "90px"
    },
    {
        name: "Action",
        selector: (row) => row.action,
        center: true
    },

]

export const StudentButtons = ({_id, onStudentDelete}) =>{
    const navigate = useNavigate()
    const handleDelete = async(_id) =>{
        const confirm = window.confirm("Do you want to delete?")
        if(confirm){
        try{
            const response = await axios.delete(`http://localhost:5000/api/student/${id}`, {
              headers: {
                "auth-token": localStorage.getItem('token') 
              }
            })
            if(response.data.success){
                onStudentDelete(id)

            }
          }
          catch(error){
            if(error.response && !error.response.data.success){
              alert(error.response.data.error)
            }
      
          }
    }
}
    return(
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-blue -600 text-white"
            onClick={()=> navigate(`/admin-dashboard/student/${_id}`)}>View</button>
            <button className="px-3 py-1 bg-green -600 text-white"
            onClick={()=> navigate(`/admin-dashboard/student/${_id}`)}>Update</button>
            <button className="px-3 py-1 bg-red-500 text-white"
            onClick={() => handleDelete(_id)}>Update</button>
        </div>
    )
}