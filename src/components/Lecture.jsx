import styled from "styled-components";
import { Link } from "react-router-dom";
const LectureCard = styled.div`
    width:250px;
    height:360px;
    display:inline-block;
    margin-right:100px;
    margin-bottom:50px;
    border : 1px solid grey;
    border-radius :5px;
    cursor:pointer;
   &:hover {
    transform: scale(1.05) translateY(-15px) ;
    }
`
const Image = styled.div`
    img {
        width:250px;
        height:200px;   
    } 
`
const Text = styled.div`
    text-align:center;
    position:relative;
    color:black;
    & li {
        list-style:none;
        display: inline-block;
        width:50px;
        position:relative;
        top:-20px;
        margin-right:10px;
        padding:2px 5px;
        margin-top: 10px;
        color:red;
        font-weight:600;
        border: 1px solid red;
        border-radius:5px;
    }
`

const Lecture = ({ id,img, title, name, price, tag }) => {

    return (
        <Link to={`/detail/${id}`}>
        <LectureCard>
            <Image>
                <img src={img} alt="" />
            </Image>
            <Text>
                <p>{title}</p>
                <p>{name}</p>
                <p>${price}</p>
                <p>{tag.map((t)=><li key ={t.id}>{t}</li>)}</p>
            </Text>
        </LectureCard>
        </Link>
    );
}
export default Lecture;