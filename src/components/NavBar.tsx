import { FC } from "react";
import { useMessageContext } from "../contexts/messageContext";


const NavBar:FC = () => { // return type nott needed because of FC type
    const {messages} = useMessageContext()
    const hasMassages = messages.length>0
    return ( 
        <nav>
            {hasMassages ? <h1>You have new notificatios</h1> : <h1>No messages</h1>}
        </nav>
     );
}
 
export default NavBar;