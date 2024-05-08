import { useStateContext } from "../../Contexts/ContextProvider";

import axiosClient from "../../axios-client";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [loading , setLoading] = useState(false)
    const {setNotification} = useStateContext()

    useEffect(()=>{
        getUsers();

    },[setUsers])

    const onDelete = (u)=>{
      if (!window.confirm('Are you sure to delete this user?')){
        return
      }
      axiosClient.delete(`/users/${u.id}`)
      .then(()=> {
        setNotification('User was successfully Deleted')

        getUsers()
      })
    }

    const getUsers = () => {
      
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            setLoading(false)
            console.log(data)
            setUsers(data.data)
          })
          .catch((e) => {
            console.log(e)
            setLoading(false)
          })
      }
    // const usersNew =[
    //     {  id:1, name: "Dashboard",email:'najmudin@gmail.com', created_at:'2024-4-18'},
    // ]

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-xl p-3 font-bold text-orange-600">
                    Users Table
                </h1>

                <Link
                    to="/users/new"
                    className="px-4 p-1 text-gray-200 font-bold rounded-lg bg-green-500 "
                >
                    + Add{" "}
                </Link>
            </div>
            <div>
                <table className="border w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                ROLE
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                CREATED-AT
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    {loading && (
                        <tbody>
                            <tr>
                                <td
                                    colSpan={6}
                                    className="text-center text-lg text-blue-600"
                                >
                                    Loading...
                                </td>
                            </tr>
                        </tbody>
                    )}
                    {!loading && (
                        <tbody>
                            {users?.map((u) => (
                                <tr
                                    className="text-[15px]  text-center"
                                    key={u.id}
                                >
                                    <td className="border">{u.id}</td>
                                    <td className="border">{u.name}</td>
                                    <td className="border">{u.email}</td>
                                    <td className="border">{u.role}</td>

                                    <td className="border">{u.created_at}</td>
                                    <td className=" border text-white">
                                        <Link
                                            className="bg-blue-600 px-2 py-1 rounded"
                                            to={"/users/" + u.id}
                                        >
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button
                                            onClick={(ev) => onDelete(u)}
                                            className="bg-red-600 px-2 py-[3px] rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}