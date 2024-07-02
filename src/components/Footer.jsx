import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterSec = styled.div`
    width:100%;
   padding:100px 0px;
    height:200px;
    background-color:#3c3c3c;
    margin-top:200px;
    color:white;
    position: relative; 
    transform: translatY(-100%);
`
const FootUp = styled.div`
   
    position:relative;
    top:100px;
    left:640px;
    ul{
        display:flex;
        gap:30px;
    }
    li {   
        list-style:none; 
        color:#bebebe;
    }
     
    @media screen and (max-width: 900px) {
        
            position:relative;
            left:80px;
    }
`
const FootDown = styled.div`
    display:flex;
    position:relative;
    left:500px;
    gap:30px;
    
    h2 {
        position:relative;
        top:-10px;
        color:white;
    }
    @media screen and (max-width: 900px) {
        
            position:relative;
            left:50px;
            font-size:0.8rem;
    }
`
const Footer = () => {
    return (
        <FooterSec>
            <FootUp>
                <ul>
                    <Link to="/"><li>홈</li></Link>
                    <Link to="/All"><li>강의정보</li></Link>
                    <Link to="/comu"><li>커뮤니티</li></Link>
                    <Link to="/cart"><li>장바구니</li></Link>
                </ul>
            </FootUp>
            <FootDown>
                <Link to="/"><h2>10012</h2></Link>
                <p>대표자:김민석</p>
                <p>H.P :010-9314-7062</p>
                <p>주소:인천광역시 서구 봉오재 1로 36</p>
            </FootDown>
        </FooterSec>

    );
}
export default Footer;