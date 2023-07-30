import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
interface CreateFormData{
    title: string,
    description: string
};

export const CreateForm = ()=>{
    //getting the user info
    const [user] = useAuthState(auth);

    //for redirecting
    const navigate = useNavigate();

    //defining the yup definition for our schema
    const schema = yup.object().shape({
        title: yup.string().required("Title Required!"),
        description: yup.string().required("Description can't be empty!"),

        //note, we don't have to map this schema to document structure in firebase
        //as we already have user info
    });
    const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    });

    const postRef = collection(db,"posts");

    const onCreatePost =async (data: CreateFormData)=>{
        await addDoc(postRef, {
            //or ...data
            ...data,
            username: user?.displayName,
            userId: user?.uid
        });

        navigate("/");
    };

    return  <div className="post-div">
    <form onSubmit={handleSubmit(onCreatePost)} className="post-form">
        <input type="text" placeholder="Title..." {...register("title")}/>
        <p>{errors.title?.message}</p>
        <textarea placeholder="Description..." {...register("description")}/>
        <p>{errors.description?.message}</p>
        <input type="submit" className="submit-form-btn"/>

        {/* not a button, we added an input of type submit to make it work with
        react-hook-form  */}
    </form>
    </div>
};