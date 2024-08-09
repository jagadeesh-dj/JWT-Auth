import './style.css'
import {useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UsersList from './UsersList'
import Chatbox from './Chatbox'
function Home(){
    
    useEffect(() => {        
        if(localStorage.getItem('access_token') === null){ 
            <Navigate to='/' />                        
        }
    },[])
    
    return (
        <div className='homeview'>
                <UsersList />
                <Chatbox />
        </div>
    );
}

export default Home;