import styled from "styled-components";
import Header from "../components/Header";
import LectureList from "../components/LectureList";
import { useState } from "react";

const MainSection = styled.div`
    position:absolute;
    top:20%;
    left:10%;
    & h2 {
        margin-bottom:50px;
    }
`
const All = () =>{
    const [search,setsearch] = useState("");
    const SearchHandler = (e) =>{
        setsearch(e.target.value);
    }
    return (
        <div>
            <Header search={search} SearchHandler ={SearchHandler}/>
            <MainSection>
                <h2>모든 강의</h2>
                <div>
                    <LectureList search ={search}/>
                </div>
            </MainSection>
        </div>

    );
}

export default All;