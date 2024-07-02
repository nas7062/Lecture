import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { imageList } from "../../public/util/imageList";
const Img = styled.img`
  width: 50%;
   height: 300px;
  position:relative;
  left:400px;
  @media screen and (max-width: 1100px) {
    width:30%;
}
    @media screen and (max-width: 700px) {
    width:0%;
}
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};
const BSlider = styled(Slider)`
position:relative;
top:150px;
height:300px;
`
const ImgList = [imageList[0], imageList[1], imageList[2], imageList[3], imageList[4], imageList[5]];

const BannerSlider = () => {
  return (
    <div>
      <BSlider {...settings}>
        {ImgList.map((item) => <div key={item}>
          <Img src={item} alt="" />
        </div>)}
      </BSlider>
    </div>
  );
};

export default BannerSlider;
