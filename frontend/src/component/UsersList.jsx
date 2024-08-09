import axios from "axios";
import { useState,useEffect } from "react";
import { Outlet,Link } from "react-router-dom";
function UsersList(){
    const [users,setVal]=useState([])
    
    useEffect(()=>{
        const data=axios.get('http://127.0.0.1:8000/userlist/',{
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(function(response){
            setVal(response.data)
        })
       
    },[])
       
    return (
        <div className="userview">
            <div className="currentuserprofile">
                <div className="settingsicon">
                    <h3><Link to='/logout'>@</Link></h3>
                </div>
                <div className="searchbar">
                    <input type="text" className="search" placeholder="Search" />
                </div>
            </div>
            <div className="userslist">
                {users.map((names)=>
                    <Link value={names.id} >
                        <div className="links">
                            <div className="img">
                                <img src="" alt="picture" />
                            </div>
                            <div className="users">
                                <h3>{names.username}</h3>
                            </div>
                        </div>
                    </Link>
                )}
               
            </div>
        </div>
    )
}
export default UsersList;