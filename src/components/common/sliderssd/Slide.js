import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slide.css";

export default function Slide({ imageList, dotsWrapperClass, dotClass }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className={dotsWrapperClass || "dots-wrapper"}> {dots} </ul>
      </div>
    ),
    customPaging: (index) => <div className={dotClass || "custom-dot"} />,
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        {imageList?.map((img) => (
          <div key={img.url} className="single-slide">
            <div className="img-wrapper">
              <img src={img.url} alt="images" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
