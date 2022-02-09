// import Navbar from "../component/Layout/navbar";
import axios from "axios";
import Layout from "../component/Layout/Layout";
// const fetchData = () => {
//   const url =
//     "https://gist.githubusercontent.com/kurniawan2805/6f54b50e72eedd68430623761b45371c/raw/3e044cd5194790a3ac9f5f6556d6b6cf8eabfe07/sample.json";
//   return (
//     axios
//       // .get("https://random-data-api.com/api/users/random_user")
//       .get(url)
//       .then((res) => {
//         // const name = `${res.data.first_name} ${res.data.last_name}`;
//         // console.log(res.data);
//         return res.data;
//       })
//   );
// };

const Index = (props) => {
  // fetchData();
  console.log(props);
  return (
    <Layout></Layout>
    // <div>
    // <Navbar></Navbar>
    // </div>
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
