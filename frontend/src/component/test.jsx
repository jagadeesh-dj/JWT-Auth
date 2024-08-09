

import { useState } from "react"
function Test(){
    const [username,setValue]=useState("");
    const [password,setValues]=useState("");
    const submittedform=(e)=>{
        e.preventDefault();
        const response=fetch('http://127.0.0.1:8000/api-token-auth/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({"username":username,"password":password}),
            })
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
            localStorage.clear()
            localStorage.setItem('DRF_Token',data.token)
            localStorage.setItem('Token_ID',data.user_id)
            })
        }

    return(
        <div>
            <form action="" method="POST" onSubmit={submittedform}>
                <input type="text" placeholder="username" name="username"onChange={(e)=>setValue(e.target.value)}/>
                <input type="text" placeholder="password" name="passowrd"  onChange={(e)=>setValues(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    )
}
export default Test;