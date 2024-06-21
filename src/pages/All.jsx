import styled from "styled-components";
import Header from "../components/Header";
import LectureList from "../components/LectureList";

const MainSection = styled.div`
    position:absolute;
    top:16%;
    left:10%;
    & h2 {
        margin-bottom:50px;
    }
`
const All = () =>{

    return (
        <div>
            <Header/>
            <MainSection>
                <h2>모든 강의</h2>
                <div>
                    <LectureList/>
                </div>
            </MainSection>
        </div>

    );
}

export default All;