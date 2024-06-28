import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { addRepple } from "../reducer/postSlice";

const ComuSection = styled.div`
    position:absolute;
    top:20%;
    left:30%;
    border:1px solid black;
    width:600px;
    height:600px;
`
const RepleSction = styled.div`
     position:absolute;
    top:90%;
    left:30%;
     border:1px solid black;
     width:600px;
    height:400px;
    
    & h2 {
     margin-left:50px;
    }
    & input{
     margin-left:50px;
        width:400px;
        height:30px;
        border-radius:10px;
    }
    & button {
        border:0px;
        background-color:white;
        font-size:1.3rem;
        margin-left:10px;
        cursor:pointer;
    }
    & li {
        list-style:none;
        margin-bottom:10px;
        margin-left:15px;
    }
`
const ComuDetail = () => {
    const posts = useSelector((state) => state.posts);
    const id = useParams();
    const dispatch = useDispatch();
    const [reple, Setreple] = useState("");
    const filterpost = posts.filter((item) => Number(item.id) === Number(id.id));

    const RepleHandler = () => {
        if (reple) {
            dispatch((addRepple({ postId: Number(id.id), reple: reple })));
            Setreple("");
        }
    }
    console.log(posts.repple);
    return (
        <div>
            <Header />
            {filterpost.map((item, idx) => <ComuSection key={idx}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </ComuSection>)}
            <RepleSction>
                <h2>댓글</h2>
                <input type="text" value={reple} onChange={(e) => Setreple(e.target.value)} />
                <button onClick={RepleHandler}>댓글달기</button>
                {filterpost.map((item) => (
                    <>
                        <ul>
                            {item.repple.map((rp, idx) => (
                                <li key={idx}>{rp}</li>
                            ))}
                        </ul>
                    </>
                ))}

            </RepleSction>
        </div>
    )
}
export default ComuDetail;