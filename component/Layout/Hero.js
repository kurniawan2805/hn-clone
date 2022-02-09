import Image from "next/image";

const Hero = () => {
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
            <Image
              src="https://mipi.ai/heading-bg.svg"
              // src="https://placekitten.com/g/600/600"
              alt="Background Hero"
              width="720"
              height="500"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
