import './App.css';
import Register from './component/register.jsx';
import Login from './component/login.jsx'
import Home from './component/home.jsx';
import ProtectedRouter from './component/ProtectedRouter.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Logout  from './component/Logout.jsx';
// import Test from './component/test.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path='/test' element={<Test />}/> */}
      <Route path='/register' element={<Register />} />
      <Route element={<ProtectedRouter />} >
        <Route path="/logout" element={<Logout/>}/>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
