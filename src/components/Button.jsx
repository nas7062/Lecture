import styled from "styled-components";

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
`
const Button = ({img ,text}) =>{
    return(
        <Btn>
            <img src={img} alt="" />
            <p>{text}</p>
        </Btn>
    );
}

export default Button;