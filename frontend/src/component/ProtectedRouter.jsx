import {Outlet,Navigate} from 'react-router'
import Login from './login';
const auth=()=>{
    let user={LogedIn: false};
    if (localStorage.getItem('access_token')!=null){
        return user['LogedIn']=true
    }
}
const ProtectedRouter=()=>{
    const isauth=auth()
    return isauth ? <Outlet /> : <Navigate to='/' /> 
}
export default ProtectedRouter;