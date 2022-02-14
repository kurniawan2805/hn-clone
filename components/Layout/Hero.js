import Image from "next/image";
import "slick-carousel/slick/slick.css?raw";
import "slick-carousel/slick/slick-theme.css?raw";

import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="hero-banner" className="flex-grow">
      {/* <main className="w-full flex flex-col"> */}
      <div className="bg-primary pt-16">
        <h1 className="text-center text-white font-bold text-lg">
          Tanya Pelajaran Apa Saja
        </h1>
        <p className="text-center text-white text-sm">
          Hanya dengan kamera ponselmu,bisa dapat jawaban soal mapel apa saja
          secara instan!
        </p>
        <div className="container mx-auto">
          <div className="heading-bg mt-5">
            <Slider {...settings}>
              <Image
                src="https://mipi.ai/heading-bg.svg"
                // src="https://placekitten.com/g/600/600"
                alt="Background Hero"
                width="720"
                height="500"
                priority
              />
              <Image
                src="https://mipi.ai/heading-bg-kuliah.png"
                // src="https://placekitten.com/g/600/600"
                alt="Background Hero 2"
                width="720"
                height="500"
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
