import React from "react";
import styled from "styled-components";

const Head = styled.div`
    display:flex;
    position:fixed;
    z-index:1;
    margin :30px 50px;
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
    
`
const Nav = styled.div`
    margin:20px 10px;
    font-weight:600;
     > ul{
        list-style: none; 
        display:flex;
        
     }
    li {
        margin:0px 30px;
    }
`
const Header = () => {
    return (
        <Head>
            <h2>10012</h2>
            <input type="text" placeholder="듣고싶은 강의를 검색하세요" />
            <Nav>
                <ul>
                    <li>강의</li>
                    <li>커뮤니티</li>
                    <li>수강후기</li>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </Nav>


        </Head>

    );
}
export default Header;