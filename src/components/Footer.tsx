import { FC } from "react";
import { useMessageContext } from "../contexts/messageContext";

const Footer:FC  = () => {
    const {messages} = useMessageContext()
    const count = messages.length
    return ( 
        <footer>
        <h3>Number of messages: {count}</h3>
      </footer>
     );
}
 
export default Footer;