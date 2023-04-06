import type { FC } from "react";
import { $messages, loadData } from "../states/messages";
import { $counter, addOne } from "../states/count";
import { $input, setInput } from "../states/input";
import useRXjs from "../hooks/useRXjx"; 

const Main:FC  = () => {
    const messages = useRXjs($messages)
    const counter = useRXjs($counter)
    const input = useRXjs($input)

    return ( 
        <main>
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