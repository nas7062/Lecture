import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../reducer/postSlice";
const Post = () =>{
    const [title,settitle] = useState('');
    const [content,setcontent] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(addPost(title,content));
        settitle('');
        setcontent('');
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>제목</label>
                <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
            </div>
            <div>
                <label >내용</label>
                <textarea  value={content} onChange={(e)=>settitle(e.target.value)}></textarea>
            </div>
            <div>
                <button type="submit">작성하기</button>
            </div>
        </form>

    );
}

export default Post;