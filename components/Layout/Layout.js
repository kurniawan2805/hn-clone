import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col relative ls-0.025 bg-gray-lgt">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
