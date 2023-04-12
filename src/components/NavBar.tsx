import { FC } from "react";
import { $messages } from "../states/messages";
import useRXjs from "../hooks/useRXjx";


const NavBar:FC = () => { // return type not needed because of FC type
    const messages = useRXjs($messages)    
    



    const hasMassages = messages.length >0
    return ( 
        <nav>
            <div>Navbar</div>   
            {hasMassages ? <h1>You have new notificatios</h1> : <h1>No messages</h1>}
        </nav>
     );
}
 
export default NavBar;