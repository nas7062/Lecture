import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addCart } from "../reducer/cartSlice";
import { useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { LoadContext } from "../App";
import styled from "styled-components";
import Intro from "../components/Intro";
const DetailSection = styled.div`
    position:absolute;
    top:25%;
    
`
const DetailNav = styled.div`
    display:flex;
    width:1600px;
    padding:30px 0px;
    margin-left:-20px;
    background-color:black;
    color:white;
    & img{
        position:relative;
        margin-left:300px;
    }
    & p {
        margin-left:50px;
       display:inline;
       height:50px;
        font-size:1.5rem;
        color:red;
    }
    & button{
    border:0px;
    border-radius:10px;
    background-color:green;
    height:50px;
    width:200px;
    color:white;
    font-weight:600;
    cursor:pointer;
    position:relative;
    left:200px;
    top:100px;
    }
     @media screen and (max-width: 1250px) {
    img,p,h2 ,button {
        position:relative;
        left:-200px;
        }
    }
    @media screen and (max-width: 800px) {
    & img, p, h2 ,button {
        position:relative;
        left:-300px;
        font-size:1.0rem;
        }
    button{
    position:relative;
        left:-400px;
        width:150px;
    }
    }
     @media screen and (max-width: 700px) {
    & img, p, h2 ,button {
        position:relative;
        left:-250px;
        font-size:1.0rem;
        width:150px;
        }
    button{
    position:relative;
        left:-250px;
        width:50px;
    }
    }
`
const Text = styled.div`
    & h2  {
    margin-left:50px;
       
       height:50px;
        font-size:1.8rem;
    }
    margin-left:30px;

`
const Navbar = styled.div`
    font-weight:600;
    border-bottom:1px solid grey;
    & ul {
        position:relative;
        left:200px;
        width:300px;
        display:flex;
        justify-content: space-between; 
    }
    & li {
        list-style:none;
        cursor:pointer;
    }
        @media screen and (max-width: 600px) {
    
        ul {
            position:relative;
            left:100px;
        }
    }
`
const New = styled.div`
    text-align:center;
    font-size:1.5rem;
    position:relative;
    top:100px;
`
const LoadDetail = () => {
    const loads = useContext(LoadContext); // LoadContext에서 강의 데이터를 가져옴.
    const dispatch = useDispatch();
    const id = useParams();
    const filterLoads = loads.filter((item) => Number(item.id) === Number(id.id));// ID에 해당하는 강의를 필터링.
    const [isOpen, setisOpen] = useState(false);
    const el = useRef();
    const el2 = useRef();
    const onMoveBox = () => {
        el.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const onMoveBox2 = () => {
        el2.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    // 스크롤 이동 함수 
    const CloseHandler = () => {
        setisOpen(false);
    }
    const OpenHandler = () => {
        setisOpen(true);
    }

    return (
        <>
            <Header />
            <DetailSection>
                {filterLoads.map((item) => <DetailNav key={item.id}>
                    <img src={item.img} alt="" />
                    <Text><h2>{item.title}</h2>
                        <h2>{item.name}</h2>
                        {item.tag.map((item, idx) => <p key={idx}>#{item}</p>)}</Text>
                    <button onClick={() => dispatch(addCart(item))}>
                        ADD TO CART
                    </button>
                </DetailNav>)}
                <Navbar>
                    <ul>
                        <li onClick={() => { onMoveBox2(); CloseHandler(); }}>강의소개</li>
                        <li onClick={() => { onMoveBox(); CloseHandler(); }}>커리큘럼</li>
                        <li onClick={OpenHandler}>새소식</li>
                    </ul>
                </Navbar>
                <div >
                    {!isOpen ? <Intro id={id} el={el} el2={el2} /> : <New> 새소식이 없습니다...</New>}
                </div>
            </DetailSection>
        </>
    );
}

export default LoadDetail;