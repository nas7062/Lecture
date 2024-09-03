import styled from "styled-components";
import Card from "./Card";
import { imageList } from "../../public/util/imageList";
import { useParams } from "react-router-dom";

const Title = styled.div`
position:relative;
left:400px;
margin-top:50px;
 @media screen and (max-width: 950px) {
        
        position:relative;
        left:80px;
        
    }
`
const Cardlist = styled.div`
 text-align:center;
    margin-top:50px;
    position:relative;
    display:flex;
    margin :0px 20px;
    left:-80px;
    justify-content : center;
`
const LoadMap = () => {
    return (
        <>
            <Title>
                <h2>취업 로드맵</h2>
            </Title>
            <Cardlist>
                <Card eng="Python,Sql" kor="데이터 사이언티스트" img={imageList[10]} id={1} />
                <Card eng="JavaScript,Java" kor="풀스택" img={imageList[8]} id={2} />
                <Card eng="JavaScript" kor="프론트엔드" img={imageList[6]} id={3} />
                <Card eng=" Java" kor="백엔드" img={imageList[7]} id={4} />
            </Cardlist>
        </>

    );
}

export default LoadMap;