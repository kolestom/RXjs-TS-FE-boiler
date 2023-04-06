import type { FC } from "react";
import { useMessageContext } from "../contexts/messageContext";




const Main:FC  = () => {
    const {messages, loadData} = useMessageContext()
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
      </main>
     );
}
 
export default Main;