import { FC } from "react";
import { $messages } from "../states/messages";
import useRXjs from "../hooks/useRXjx";
import { $user } from "../states/user";

const Footer:FC  = () => {
    const messages = useRXjs($messages)
    const user = useRXjs($user)
    const count = messages.length



    return ( 
        <footer>
        <h3>Number of messages: {count}</h3>
        {user && <h2>Hello {user.email}</h2>}
      </footer>
     );
}
 
export default Footer;