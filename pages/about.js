const About = () => {
  return (
    <div className="relative">
      <div
        id="slide-0"
        className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide"
      >
        Hello
      </div>
      <div
        id="slide-1"
        className="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide"
      >
        There
      </div>
      <div className="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
        Booya!
      </div>
      <div className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
        Hello
      </div>
    </div>
  );
};

export default About;

// setInterval(function () {
//   let activeSlide = document.querySelector(".slide.translate-x-0");
//   activeSlide.classList.remove(".translate-x-0");
//   activeSlide.classList.add("-translate-x-full");

//   let nextSlide = activeSlide.nextElementSibling
//     ? activeSlide.nextElementSibling
//     : document.querySelector(".slide").firstElementChild;
//   nextSlide.classList.remove(".translate-x-full");
//   nextSlide.classList.remove(".-translate-x-full");
//   nextSlide.classList.add(".translate-x-0");
// }, 1000);

// setInterval(function () {
//   let activeSlide = document.querySelector("-translate-x-full");
//   activeSlide.classList.remove("-translate-x-full");
//   activeSlide.classList.add("translate-x-0");

//   let nextSlide = document.querySelector(".slide.translate-x-full");
//   nextSlide.classList.remove("translate-x-full");
//   nextSlide.classList.add("translate-x-0");
// }, 1000);
