import { FC, useEffect } from "react";
import { $messages, loadData } from "../states/messages";
import useRXjs from "../hooks/useRXjx"; 
import { logout, $user } from "../states/user";
import { Route } from "./Route";
import { fullUrl } from "../config";
import { getSecret } from "../api/own";


const Main:FC = () => {
    const messages = useRXjs($messages)
    const user = useRXjs($user)


 
    return (



        <main>
          <div>Main</div>
          {user && <p>Hello, {user.email}</p>}
          <a href={fullUrl}>Login</a>
          <button onClick={logout}>Logout</button>

          <Route path="/dashboard" hasAccess={!!user}>
              <div>Dashboard</div>
          </Route>
          <Route path="/first">
              <div>First</div>
          </Route>
          <Route path="/second">
              <div>Second</div>
          </Route>
          <Route path="/third">
              <div>Third</div>
          </Route>
         
         <button onClick={getSecret}>Secret</button>
          <button onClick={loadData}>Load Data</button>
          {messages.map((message, i) => {
            return <div key={i}>
              <h2>Sender: {message.sender}</h2>
              <h2>Receiver: {message.receiver}</h2>
              <p>Message: {message.message}</p>
            </div>
           })}
          
        </main>
     );
}
 
export default Main;