import {Post as IPost} from "./main"

interface Props{
    post: IPost
}

export const Post = (props:Props)=>{
    const {post} = props;
    return <div className="post-dec">
        <div className="title">
            <h1>{post.title}</h1>
        </div>
        <div className="body">
            <p>{post.description}</p>
        </div>
        <div className="footer">
            <i><small><p>@{post.username}</p></small></i>
        </div>
    </div>


};