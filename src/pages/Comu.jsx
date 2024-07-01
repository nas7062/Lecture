import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../components/PostList";
import styled from "styled-components";
import { useState } from "react";

const ComuSection = styled.div`
    
    position:absolute;
    left:30%;
    top:20%;
    
`
const Nav = styled.div`
    display:flex;
    position:relative;
    top:30px;
    left:-90px;
    gap:50px;
    text-align:center;
    & h2 {
        font-size:2.0rem;
    }
    & input {
        border-radius:10px;
        width:250px;
        height:40px;
        font-size:1.5rem;
        position:relative;
        top:30px;
        margin-left:200px;
    }
    & button {
        border:0px;
        font-size:1.2rem;
        height:50px;
        background-color:#7DF4B2;   
        padding:10px 20px;
        border-radius:10px;
        font-weight:600;
        cursor:pointer;
        position:relative;
        top:30px;
    }
`
const Comu = () =>{
    
    const navigate = useNavigate();
    const [search,setsearch] = useState("");
    const SearchHandler = (e) =>{
        setsearch(e.target.value);
    }
    return(
        <>
            <Header/>
            <ComuSection>
                <Nav>
                <h2>자유게시판</h2>
                    <input type="input" placeholder="검색하세요" value={search} onChange={SearchHandler}/>
                    <button onClick={()=>navigate('/post')}>글쓰기</button>
                </Nav>
               <div>
                <PostList search ={search}/>
               </div>
            </ComuSection>
        </>

    );
}

export default Comu;