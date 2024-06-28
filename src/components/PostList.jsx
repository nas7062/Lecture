import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostSec = styled.div`
    border-top:1px solid #dcdcdc;
    border-bottom:1px solid #dcdcdc;
    margin-top:30px;
    width:700px;
    font-size:1.5rem;
    display:inline-block;
    & p{
        word-break:break-all;
    }
    color:black;
`
const PostList = () =>{
    const Posts = useSelector((state)=>state.posts);
   
    return(
        <div>
            {Posts.map((post,idx)=>
            (   <>
                <Link to={`/comu/${idx}`}>
                <PostSec key={idx} >
                    <h2>{post.title}</h2>
                    <p>{post.content.length >100 ?post.content.slice(0,100) : post.content}</p>
                    
                </PostSec>
                </Link>
                </>
            ))}
        </div>

    );
}
export default PostList;