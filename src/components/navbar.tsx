//Link is a component from react-router-dom
//Link will help in moving from state-to-state (page-to-page)
//post that, it is upto the "Route" component to display appropriate content
//based on the current state

import {Link} from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Navbar = ()=>{
    //for redirecting user after logging out
    const navigate = useNavigate();

    //function to sign user out
    const signUserOut = async ()=>{
        await signOut(auth);
        navigate("/login");
    };
    const [user] = useAuthState(auth);

    return <div className="navbar">
        <div className="links">
        <Link to="/">Home</Link>
        {!user ? <Link to="/login">Login</Link>:
        <Link to="/createpost">Create Post</Link>}
        
        </div>

        <div className="user">
            {user 
            && 
            (
            <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="100" height="100"/>
                <button onClick={signUserOut} className="logout-btn">Log Out</button>
            </>)}
            {/* div to displat user info */}
            
        </div>
    </div>
};