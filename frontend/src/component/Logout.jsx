import {useEffect} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Logout = () => {    
    const navigate=useNavigate()
    useEffect(() => {       
        (async () => {         
            try {
                const {data} = await  
                    axios.post('http://127.0.0.1:8000/logout/',{
                    refresh_token:localStorage.getItem('refresh_token')
                    } ,{headers: {'Content-Type': 'application/json'}},  
                    {withCredentials: true});           
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                navigate('/')
                } catch (e) {
                    console.log('logout not working', e)
                }
            })();

    });    
    return (
       <div></div>
     )
}
export default Logout;