import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imageList } from "../../public/util/imageList";
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
     img {
        width:30px;
        margin-right:10px;
     }
    color:black;
`
const PostList = ({search}) =>{
    const Posts = useSelector((state)=>state.posts);
    const filteredPosts = Posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <div>
            {filteredPosts.map((post,idx)=>
            (   <>
                <Link to={`/comu/${idx}`}>
                <PostSec key={idx} >
                    <h2>{post.title}</h2>
                    <p>{post.content.length >100 ?post.content.slice(0,100) +"..." : post.content}</p>
                    <img src={imageList[20]} alt="" />
                    <span>{post.good || 0}</span>
                </PostSec>
                </Link>
                </>
            ))}
        </div>

    );
}
export default PostList;