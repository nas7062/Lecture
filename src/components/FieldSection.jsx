import styled from "styled-components";
import Button from "./Button";
import { imageList } from "../../public/util/imageList";
const Field = styled.div`
    text-align:center;
    position:relative;
    display:flex;
    margin :0px auto;
    left:-80px;
    justify-content : center;
    height:
`
const Title = styled.div`
    position:relative;
     left:400px;
     margin-top:200px;
`
const FieldSection = () => {
    
    return (
        <>
        <Title>
        <h2>분야별 강의</h2>
        </Title>
        <Field>
            <Button  img={imageList[6]} text="기초강의" nav="/All"/>
            <Button img={imageList[7]} text="데이터 분석"/>
            <Button img={imageList[12]} text="웹 개발"/>
            <Button img={imageList[9]} text="프로그래밍 언어"/>
            <Button img={imageList[10]} text="인공지능"/>
            <Button img={imageList[8]} text="디자인"/>
        </Field>
        </>
    );
}

export default FieldSection;