import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: "slick-dots-add",
  };
  return (
    <div>
      {/* <Slider {...settings}>{renderSlides()}</Slider> */}
      <Slider {...settings}>
        <div className="bg-primary pt-16">
          <h1 className="text-center text-white font-bold text-lg">
            Tanya Pelajaran Apa Saja
          </h1>
          <p className="text-center text-white text-sm">
            Hanya dengan kamera ponselmu,bisa dapat jawaban soal mapel apa saja
            secara instan!
          </p>
          <Image
            className="-mt-15"
            src="https://mipi.ai/heading-bg.svg"
            // src="https://placekitten.com/g/600/600"
            alt="Background Hero"
            width="720"
            height="500"
            priority
          />
        </div>
        <div className="bg-primary pt-16">
          <h1 className="text-center text-white font-bold text-lg">
            Info Dunia Kuliah
          </h1>
          <p className="text-center text-white text-sm">
            Berbagi pengalam seru atau bertanya untuk persiapan kuliah bisa di
            sini!
          </p>
          <Image
            className="-mt-15"
            src="https://mipi.ai/heading-bg-kuliah.png"
            // src="https://placekitten.com/g/600/600"
            alt="Background Hero 2"
            width="720"
            height="500"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
