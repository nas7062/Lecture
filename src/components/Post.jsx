import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducer/postSlice";
import Header from "./Header";
import {  useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
    position:absolute;
    left:30%;
    top:30%;
    border:1px solid grey;
    padding:20px 40px;
    width:500px;
    height:300px;
    
`
const Title = styled.div`
   
    display:flex;
    gap:20px;
    
   & input{
        flex:1;
        height:30px;
        margin-bottom:30px;
    }
    & textarea {
        flex:1;
        height:100px;
        margin-bottom:30px;
    }
`
const Btn = styled.div`
    text-align :center;
    margin-top:50px;
    button {
        border:0px;
        background-color:white;
        font-size:1.5rem;
        font-weight:600;
        cursor:pointer;
    }
`
const Post = () =>{
    const id =useParams();
    const Posts = useSelector((state)=>state.posts);
    const [title,settitle] = useState('');
    const [content,setcontent] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const NewPost = {
            id :Posts.length,
            title,
            content
        }
        dispatch(addPost(NewPost));
        settitle('');
        setcontent('');
    }
    
    return(
        <>
        <Header/>
        
        <Form onSubmit={submitHandler}>
            <Title >
                <label>제목</label>
                <input type="text" value={title} placeholder="제목을 작성해주세요" onChange={(e)=>settitle(e.target.value)}/>
            </Title>
            <Title>
                <label >내용</label>
                <textarea  placeholder="질문하고 싶은 내용을 작성해주세요." value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
            </Title>
            <Btn>
                <button type="submit" onClick={()=>navigate(-1)} >작성하기</button>
            </Btn>
        </Form>
        
        </>
    );
}

export default Post;