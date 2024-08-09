import './style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Register(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passerror,setpasswordError]=useState("")
    const [usernameerror,setUsernameError]=useState("")
    const [emailerror,setEmailError]=useState('')
    const nagivate=useNavigate()
    const FormSubmit=(e)=>{
        e.preventDefault();
            fetch('http://127.0.0.1:8000/userview/',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username,email,password
                })
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.password){
                    setpasswordError(data.password)
                }if (data.username) {
                    setUsernameError(data.username)
                } else {
                    setEmailError(data.email)
                }
            })

            
    }
    
    return (
        <div className='registerpage'>
            <div className='myform'>
                <form action="" method='post' onSubmit={FormSubmit}>
                    <div>
                        <h1>Register</h1>
                    </div>
                    <div>
                        <input type="text" placeholder='UserName' className='username' onChange={(e)=>{setUsername(e.target.value)}}/> <br />
                        <small>{usernameerror}</small>
                    </div>
                    <div>
                        <input type="email" placeholder='Email' className='email' onChange={(e)=>{setEmail(e.target.value)}}/> <br />
                        <small>{emailerror}</small>
                    </div>
                    <div>
                        <input type="password" placeholder='Password' className='password' onChange={(e)=>{setPassword(e.target.value)}}/> <br />
                        <small>{passerror}</small>
                    </div>
                    <div>
                        <button className='registerbtn'>Signup</button>
                    </div>
                    <div>
                    <p>I already have an account:<Link to='/'>Signin</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;