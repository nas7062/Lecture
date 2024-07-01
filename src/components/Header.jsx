import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import Modal from "./Modal";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
const Head = styled.div`
    display:flex;
    position:fixed;
    width:100%;
    z-index:1;
    margin :30px 0px;
    align-items: center;
    justify-content : center;
    border-top:1px solid grey;
    border-bottom:1px solid grey;
    >h2{
    margin:10px 100px;
    font-size:2.5rem;
    }
    > input {
    margin:25px 50px;
        height :30px;
        border-radius:10px;
        width:500px;
        background-color:rgb(230,230,230);
    }
    a {
     text-decoration: none;
     color:black;
    }
`
const Nav = styled.div`
    margin:20px 10px;
    font-weight:600;
     > ul{
        list-style: none; 
        display:flex;
     }
    li {
        margin:10px 20px;
        color:black;
        width:70px;
        cursor:pointer;
        > span {
            color:red;
            position:relative;
            top:-30px;
            left:70px;
        }
    }
    a {
     text-decoration: none;
    }
`
const Header = ({search,SearchHandler}) => {
    const carts = useSelector((state)=>state.carts);
    const [open,setopen] = useState(false);
    const logoutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log("로그아웃 성공");
            })
            .catch((error) => {
                console.error("로그아웃 오류:", error);
                alert(error.message);
            });
            
    };
    
    return (
        <Head>
            <h2><Link to={"/"}>10012</Link></h2>
            <input type="text" placeholder="듣고싶은 강의를 검색하세요" onChange={SearchHandler}/>
            <Nav>
                <ul>
                    <Link to={"/All"}><li>강의</li></Link>
                    <Link to={"/comu"}><li>커뮤니티</li></Link>
                    <li>수강후기</li>
                    <Link to={"/cart"}><li>장바구니<span>
                        {carts.length ===0 ? " " :carts.length}
                        </span></li></Link>
                    {!auth.currentUser ? <li onClick={()=>setopen(true)}>로그인</li>
                    :<li onClick={logoutHandler}>로그아웃</li>}
                </ul>
            </Nav>
                <Modal isOpen={open} onClose={()=>setopen(false)}>
                    <Login onClose={()=>setopen(false)}/>
                </Modal>

        </Head>

    );
}
export default Header;