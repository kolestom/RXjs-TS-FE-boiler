import { FC, useState } from "react";
import { $messages } from "../states/messages";
import useRXjs from "../hooks/useRXjx";
import { $user } from "../states/user";
import { navigate } from "../states/routes";

type Props = {
    navigate: (path: string) => any
}

const NavBar:FC = () => { // return type not needed because of FC type
    const messages = useRXjs($messages)  
    const user = useRXjs($user)
    const hasMassages = messages.length >0
    


    return ( 
        <nav>
            <div>Navbar</div>
            <button onClick={()=>navigate('/first')}>First</button>
            <button onClick={()=>navigate('/second')}>Second</button>
            <button onClick={()=>navigate('/third')}>Third</button>

            {user && <h2>Hello {user.email}</h2>}
            {hasMassages ? <h1>You have new notificatios</h1> : <h1>No messages</h1>}
        </nav>
     );
}
 
export default NavBar;