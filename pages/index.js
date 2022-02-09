// import Navbar from "../component/Layout/navbar";
import axios from "axios";
import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import Card from "../components/Layout/Card";

const Index = (props) => {
  // fetchData();
  // console.log(props);
  return (
    <Layout>
      <Hero></Hero>
      <hr className="mb-6" />
      <div className="flex items-center justify-between border-l-4 border-primary pl-2 mb-4 ">
        <h2 className="text-base text-base-primary font-bold">
          Terbaru di Pelajaran
        </h2>
        <Link href="/forum" passHref>
          <a className="text-sm text-base-primary font-bold underline cursor-pointer">
            Lihat Semua
          </a>
        </Link>
      </div>
      <main className="flex-1 overflow-y-auto p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        itaque ex voluptatibus animi officia illo et odio eos molestias, quis,
        reiciendis tempore in, quos quam ea nostrum? Quia, magni debitis? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci
        voluptate. Quisquam saepe, nihil maiores maxime dolorum omnis quae
        mollitia error facere tempore, nemo nobis atque facilis corporis at?i
        Molestiae?
        <Card posts={props}></Card>
      </main>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const url =
    "https://gist.githubusercontent.com/kurniawan2805/6f54b50e72eedd68430623761b45371c/raw/3e044cd5194790a3ac9f5f6556d6b6cf8eabfe07/sample.json";
  const data = await axios.get(url).then((res) => res.data);

  console.log(data);
  return data;
  // const posts = res.data.map((post) => post.data);
};

export default Index;
