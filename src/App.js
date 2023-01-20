import './App.css';
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:3001";
const socket = io.connect("http://localhost:3001");
function App() {
    const [response, setResponse] = useState("");
    const [userSocketID, setuserSocketID] = useState("");

    useEffect(() => {
      socket.on("FromAPI", data => {
       setResponse(data)
      });
    }, []);
    // useEffect(() => {
    //   socket.emit("test",{msg:"jashkdjhask"})
    //   socket.on("hellotest", data => {
    //    setResponse(data)
    //   });
    // }, []);
    
    // const getSocketID=()=>{
    //   socket.emit("test",{msg:"jashkdjhask"})
    //   socket.on("getUserSocketID", data => {
    //     setuserSocketID(data)
    //    });
    // }
    const getSocketID=()=>{
      socket.emit('Click');
      console.log("cllick")
    }
    socket.on('getUserSocketID', function(data){
      setuserSocketID(data)
    });
  
    return (
      <div>
        It's <time dateTime={response}>{response}</time>
        <button onClick={getSocketID}>Click</button>
        <p>{userSocketID}</p>
      </div>
  
  );
}

export default App;
