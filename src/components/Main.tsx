import { FC, useEffect } from "react";
import { $messages, loadData } from "../states/messages";
import { $counter, addOne } from "../states/count";
import { $input, setInput } from "../states/input";
import useRXjs from "../hooks/useRXjx"; 
import { login, logout, $user } from "../states/user";

const Main:FC  = () => {
    const messages = useRXjs($messages)
    const counter = useRXjs($counter)
    const input = useRXjs($input)
    const user = useRXjs($user)

  const url = "https://accounts.google.com/o/oauth2/v2/auth";
  const client_id ="422216780646-pgs3os1u4o3a0n6n7scp647v7bqibtrm.apps.googleusercontent.com";
  const redirect_URI = "http://localhost:5173";
  const scope = "profile%20email%20openid";
  const response_type = "code";
  const fullUrl = `${url}?client_id=${client_id}&redirect_uri=${redirect_URI}&scope=${scope}&response_type=${response_type}&prompt=consent%20select_account`;

  useEffect(()=>{
    const urlSearchParams = new URLSearchParams(window.location.search)
    const code = urlSearchParams.get("code")
    if (code) login(code) 
  },[])
    return (



        <main>
          {user && <p>Hello, {user.email}</p>}
          <a href={fullUrl}>Login</a>
          <button onClick={logout}>Logout</button>
          <button onClick={loadData}>Load Data</button>
          {messages.map((message, i) => {
            return <div key={i}>
              <h2>Sender: {message.sender}</h2>
              <h2>Receiver: {message.receiver}</h2>
              <p>Message: {message.message}</p>
            </div>
           })}
          <button onClick={addOne}>Add One</button>
          <input type="text" placeholder="enter text" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <h1>{counter}</h1>
        </main>
     );
}
 
export default Main;