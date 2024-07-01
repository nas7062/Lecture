import { useContext, useState } from "react";
import { LectContext } from "../App";
import styled from "styled-components";
import Modal from "./Modal";
import Review from "../pages/Review";
const Descript = styled.div`
    width:700px;
    font-weight:600;
    font-size:1.5rem;
    text-align:center;
    line-height:40px;
    position:relative;
    left:100px;
    margin-bottom:200px;
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
        cursor:pointer;
    }
    & li:first-child {
        background-color:#d3d3d3;
        cursor:pointer;
    }
`
const CurSec = styled.div`
    & h2 {
        position:relative;
        left:150px;
        margin-bottom:50px;
    }
`
const Intro = ({id, el,el2}) =>{
    const lectures = useContext(LectContext);
    const filterLect=  lectures.filter((item)=>Number(item.id) ===Number(id.id));
    const [openIndex, setOpenIndex] = useState(null);
    const [open,setopen] = useState(false);
    const ClickHandler = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
    };
    
    return(
        <div >
            {filterLect.map((item,idx)=><div ref={el2} key={idx}>
                <Descript>{item.descript.map((item,idx)=><p key={idx}>{item}</p>)}</Descript>
                <CurSec>
                    <h2 >커리큘럼</h2>
              {item.curriculum.map((cur,idx)=>
                    <CurList key={idx} ref={el}>
                        
                        <li  onClick={() => ClickHandler(idx)}><h3>{cur.section}</h3></li>
                        {openIndex ===idx && cur.lectures.map((item,idx)=><li key={idx} >{item}</li>)}
                    </CurList>
             )}
             </CurSec>
             <div>
                <button onClick={()=>setopen(true)}>수강평 남기기</button>
             </div>
            </div>)}
            <Modal isOpen={open} onClose={()=>setopen(false)}>
            <Review onClose={()=>setopen(false)}/>
            </Modal>
        </div>
         
    );
}
export default Intro;