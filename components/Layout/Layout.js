import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col relative">
      {/* <Header /> */}
      <Navbar />
      <div className="layout">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
