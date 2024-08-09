import axios from "axios";
import { useEffect } from "react";
function Chatbox(){
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/message/1/28/',{
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(function(response){
            console.log(response.data)
        })
    },[])
    return (
        <div className="chatview">
            <div className="profiles">
                <div className="receiverprofile">
                    <div className="backicon">
                        <p>back</p>
                    </div>
                    <div className="img">
                        <img src="" alt="picture" />
                    </div>
                    <div className="receivername">
                        <h2>receivername</h2>
                    </div>
                </div>
                <div className="receiversettings">
                    <h1>:</h1>
                </div>
            </div>
            <div className="chatarea">
                <table>
                    <tbody>
                        <tr>
                            <td>Hi hello</td>
                        </tr>
                        <tr>
                            <td>Hello iam fine</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="textboxarea">
                <form action="" className="messageform">
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
           
        </div>
    )
}
export default Chatbox;