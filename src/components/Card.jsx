import { Link, useParams } from "react-router-dom";
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
    h3 {
        color:black;
    }
    > img{
        width:80px;
    }
    @media screen and (max-width: 950px) {
        
        position:relative;
        left:80px;
        width:150px;
    }
    @media screen and (max-width: 750px) {
        
        position:relative;
        left:80px;
        width:100px;
    }
`
const Card = ({ eng, kor, img, id }) => {

    return (
        <Link to={`/load/${id}`}>
            <Cardslice>
                <h3>{eng}</h3>
                <h3>{kor}</h3>
                <img src={img} alt="aaa" />
            </Cardslice>
        </Link>
    );
}

export default Card;