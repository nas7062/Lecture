import styled, { keyframes } from "styled-components";
import { imageList } from "../../public/util/imageList";

const FadeIn = keyframes `
    0% {
        opacity: 0;
        transform: translate3d(0, 50%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
`
const PointWarp = styled.div`
    width:1000px;
    margin :0 auto;
    text-align:center;
    margin-top:100px;
    position:relative;
    left:-80px;
    animation: ${FadeIn} 2s linear;
       
`
const FirstSection = styled.div`
    border-radius:10px;
    width:300px;
    height:400px;
    text-align:left;
    padding:30px;
    background-color:rgba(196,123,195,0.3);
`
const SecondSection = styled.div`
    border-radius:10px;
    width:300px;
    height:400px;
    text-align:left;
    padding:30px;
    flex:1;
    background-color:rgba(123,223,195,0.3);
`
const Image = styled.div`
position:relative;
top:80px;
left:50px;
    img {
        width:200px;
        margin:0px 10px;
}
`
const Image2 = styled.div`
position:relative;
top:-300px;
left:400px;
    img {
        width:500px;
        margin:0px 10px;
}
`
const SectionWrap = styled.div`
    display:flex;
    gap:50px;
`
const ThirdSection = styled.div`
    border-radius:10px;
    margin-top:50px;
    width:940px;
    height:400px;
    text-align:left;
    padding:30px;
    flex:1;
    background-color:rgba(153,123,223,0.3);
`
const Descript = styled.div`
    width:250px;
    text-align:left;
`
const Point = () => {
    return (
        <PointWarp id ="wrap">
            <h3>학습 환경</h3>
            <h2>누구나 쉽고 재미있게 오랫동안 학습할 수 있어요!</h2>
            <SectionWrap>
                <FirstSection>
                    <div>
                        <h2>짧고 굵은 영상</h2>
                        <p>꼭 필요한 내용만 짧은 시간내에</p>
                        <p>지루하지 않게 끝까지 들을 수 있어요.</p>
                    </div>
                    <Image>
                        <img src={imageList[12]} alt="" />
                    </Image>
                </FirstSection>
                <SecondSection>
                    <div>
                        <h2>퀴즈/실습/커뮤니티를 이용한 학습 방법 </h2>
                        <p>영상 중간중간 퀴즈와 실습을 통해 학습가능하고</p>
                        <p>커뮤니티 및 디스코드 카카오톡을 통해 질문가능!</p>
                    </div>
                    <Image>
                        <img src={imageList[13]} alt="" />
                        <img src={imageList[9]} alt="" />
                    </Image>
                </SecondSection>
            </SectionWrap>
            <ThirdSection>
                <Descript>
                    <h2>빈틈 없는 커리큘럼,</h2> 
                    <h2>중복 없는 커리큘럼</h2>
                    <p>실무 경험이 풍부한 교육 전문가들이 직접 커리큘럼을 만듭니다.</p>
                    <p>외부 강사의 강의를 짜깁기해 빈틈과 중복이 많은 타 강의에 비해, 이해가 쉽고 몰입도가 높아요.</p>
                </Descript>
                <Image2>
                        <img src={imageList[15]} alt="" />
                </Image2>
            </ThirdSection>

        </PointWarp>

    );
}

export default Point;