import { Carousel } from "react-responsive-carousel";
import Background from "../../shared/backgrounds";
import Container from "../../shared/container";

const handleClick = (index) => {
};

const Slider = () => {
  return (
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          stopOnHover={false}
          showStatus={false}
          useKeyboardArrows={true}
          onClickItem={handleClick}
        >
          <img src="/images/slider/1.png" />
          <img src="/images/slider/2.png" />
          <img src="/images/slider/3.png" />
          <img src="/images/slider/4.png" />
        </Carousel>

  );
};
export default Slider;
