import styled from "styled-components";

const Cardslice = styled.div`
    border :0px;
    border-radius:10px;
    display:inline-block;
    width:250px;
    height:200px;
    margin:10px 30px;
    text-align:center;
    background-color:rgba(155,223,135,0.5);
    > h3:first-child {
    color:green;
    }
    > img{
        width:80px;
    
    }
`
const Card = ({eng,kor,img})=>{

    return(
            <Cardslice>
                <h3>{eng}</h3>
                <h3>{kor}</h3>
                <img src={img} alt="aaa" />
            </Cardslice>

    );
}

export default Card;