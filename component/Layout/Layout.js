import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col relative">
      {/* <Header /> */}
      <Navbar />
      <Hero></Hero>
      <hr className="mb-6" />
      <div className="layout">{props.children}</div>
      <main className="flex-1 overflow-y-auto p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        itaque ex voluptatibus animi officia illo et odio eos molestias, quis,
        reiciendis tempore in, quos quam ea nostrum? Quia, magni debitis? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci
        voluptate. Quisquam saepe, nihil maiores maxime dolorum omnis quae
        mollitia error facere tempore, nemo nobis atque facilis corporis at?
        Molestiae?
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
