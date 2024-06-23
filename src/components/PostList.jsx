import { useSelector } from "react-redux";
const PostList = () =>{
    const Posts = useSelector((state)=>state.posts);

    return(
        <div>
            {Posts.map((post,idx)=>
            (
                <div key={idx}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>

    );
}
export default PostList;