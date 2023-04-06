import { FC } from "react";
import { $messages } from "../states/messages";
import useRXjs from "../hooks/useRXjx";

const Footer:FC  = () => {
    const messages = useRXjs($messages)
    const count = messages.length
    return ( 
        <footer>
        <h3>Number of messages: {count}</h3>
      </footer>
     );
}
 
export default Footer;