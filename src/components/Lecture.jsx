import styled from "styled-components";
import { imageList } from "../../public/util/imageList";

const LectureCard = styled.div`
  
    width:200px;
    height:200px;
     display:inline-block;
      margin-right:100px;
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
    left:20px;
`

const Lecture = ({ img, title, name, price, tag }) => {

    return (
        <LectureCard>
            <Image>
                <img src={img} alt="" />
            </Image>
            <Text>
                <p>{title}</p>
                <p>{name}</p>
                <p>${price}</p>
            </Text>
        </LectureCard>

    );
}
export default Lecture;