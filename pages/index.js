// import Navbar from "../component/Layout/navbar";
import axios from "axios";
import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import Cards from "../components/Layout/Cards";
import ImageSlider from "../components/ImageSlider";

const Index = (props) => {
  // fetchData();
  // console.log(props);
  return (
    <Layout>
      <main className="flex-1 overflow-y-auto">
        {/* <Hero></Hero> */}
        <ImageSlider />
        <div className="bg-gray-lgt rounded-lg rounded-b-none relative -mt-5 px-4 pt-3 pb-4">
          <div className="p-4 bg-white rounded-lg mb-6 -mt-12 flex flex-col items-center">
            {/* selector button  */}
            <div className="flex bg-card-primary rounded-full mb-4">
              <div className="py-2 w-32 rounded-full text-center cursor-pointer bg-primary">
                <div className="text-xs font-bold text-white">Pelajaran</div>
              </div>
              <div className="py-2 w-32 rounded-full text-center cursor-pointer bg-card-primary">
                <div className="text-xs font-bold text-base-primary">
                  Info Kuliah
                </div>
              </div>
            </div>
            <div className="text-sm text-primary text-opacity-70 text-center mb-3">
              Temukan jawaban akuratmu di Mipi
            </div>
            {/* Search bar */}
            <div className="mb-2 w-full">
              <div className="w-full flex items-center rounded-lg p-2 bg-card-primary">
                <input
                  type="text"
                  placeholder="Cari/tanyakan soalmu di sini..."
                  // value
                  // readOnly
                  className="focus:outline-none w-full ml-2 bg-transparent text-base-primary"
                />
              </div>
            </div>
          </div>
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
          <Cards posts={props}></Cards>
        </div>
      </main>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const url =
    "https://gist.githubusercontent.com/kurniawan2805/6f54b50e72eedd68430623761b45371c/raw/3e044cd5194790a3ac9f5f6556d6b6cf8eabfe07/sample.json";
  // "https://gist.githubusercontent.com/kurniawan2805/6f54b50e72eedd68430623761b45371c/raw/a9703d6063b21135c2310afd13f8d0625b6528f3/sample.json";
  try {
    const request = await axios.get(url);
    return request.data;
  } catch (error) {}
  alert(error);
  // then((res) => {
  // console.log(res.data);
  // return res.data;
  // });
  // const result = await request.json();
  // console.log(JSON.parse(request.data));
};

export default Index;
