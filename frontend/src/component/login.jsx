import axios from "axios";
import './style.css'
import {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Login(){
    const navigate=useNavigate()

    axios.interceptors.response.use(res=>res,async error=>{
        const access_token=localStorage.getItem('access_token')
        // const refresh_token=localStorage.getItem('refresh_token')
        if (access_token !== null ){
            navigate('/home')
        }
        else{
            console.log('rquired login')
        }
    })
    
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

    const LoginForm=async (e)=>{
        e.preventDefault();
        const user={username:username,password:password}
        await axios.post('http://127.0.0.1:8000/token/',
                         user ,{headers: 
                        {'Content-Type': 'application/json'}},
                        {withCredentials: true
                        })
                        .then(function(response){
                            if (response.status===200){
                                navigate('/home')
                                localStorage.clear();         
                                localStorage.setItem('access_token', response.data.access);         
                                localStorage.setItem('refresh_token', response.data.refresh);
                                axios.defaults.headers.common['Authorization']=`Bearer ${response.data['access']}`
                            }
                            console.log(response.status)
                        })        
    }
    return (
        <div className='loginpage'>
            <div className='myform'>
                <form action="" onSubmit={LoginForm}>
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <input type="text" placeholder='UserName' className="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    
                    <div>
                        <input type="password" placeholder='Password' className="password" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div>
                        <button className="loginbtn">login</button>
                    </div>
                    <div>
                    <p>I did't have any account:<Link to='/register'>Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;