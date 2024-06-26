import { useContext, useState } from "react";
import { LectContext } from "../App";
import styled from "styled-components";
const Descript = styled.div`
    width:700px;
    font-weight:600;
    font-size:1.5rem;
    text-align:center;
    line-height:50px;
    position:relative;
    left:100px;
`
const CurList = styled.ul`
    
    display:flex;
    flex-direction:column;
    width:550px;
    position:relative;
    left:100px;
    & li {
        list-style:none;
        border:1px solid grey;
        padding:10px 20px;
        border-radius:10px;
        background-color:whites;
    }
    & li:first-child {
    background-color:#d3d3d3;
    }

`
const Intro = ({id}) =>{
    const lectures = useContext(LectContext);
    const filterLect=  lectures.filter((item)=>Number(item.id) ===Number(id.id));
    const [openIndex, setOpenIndex] = useState(null);  

    const ClickHandler = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
    };
    return(
        <div>
            {filterLect.map((item,idx)=><div key={idx}>
                <Descript>{item.descript.map((item,idx)=><p key={idx}>{item}</p>)}</Descript>
              {item.curriculum.map((cur,idx)=>
                    <CurList key={idx}>
                        <li  onClick={() => ClickHandler(idx)}><h3>{cur.section}</h3></li>
                        {openIndex ===idx && cur.lectures.map((item,idx)=><li key={idx} >{item}</li>)}
                    </CurList>
             )}
            </div>)}
            <div>
                <p>새소식이 없습니다...</p>
            </div>
        </div>
    );
}
export default Intro;