import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login = ()=>{
    const navigate = useNavigate();
    //creating a function that will be triggered when we hit the "sign in" button

    //after logging in, redirecting user to home page
    const signInWithGoogle = async ()=>{
        const result = await signInWithPopup(auth, provider);
        navigate("/");
        
    };

    return <div>
        <p>Sign In with Google</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>;
}