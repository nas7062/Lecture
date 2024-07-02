import styled from "styled-components";
import { useNavigate } from "react-router-dom"
const Btn = styled.div`
    > img {
    width:100px;
    height:100px;
    }
    > p{
    text-align:center;
    font-weight:600;
    margin-top:10px;
    }
    margin:10px 30px;
    cursor:pointer;
    @media screen and (max-width: 850px) {
        img{
            width:80%;
        }
        position:relative;
        left:80px;
    }
`
const Button = ({ img, text, nav }) => {
    const navigate = useNavigate();
    const OnNavigate = () => {
        navigate(nav);
    }
    return (
        <Btn onClick={OnNavigate}>
            <img src={img} alt="" />
            <p>{text}</p>
        </Btn>
    );
}

export default Button;