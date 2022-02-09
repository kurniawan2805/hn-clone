import { useState } from "react";

const Cards = ({ posts }) => {
  // console.log(posts);
  const data = [];
  // const [data, setData] = useState([]);
  for (let [key, value] of Object.entries(posts)) {
    // console.log(value);
    data.push(value);
    // }
  }
  console.log(data);
  // for (let [key, value] of Object.entries(posts)) {
  //   console.log(`key=${key} value=${value}`);
  // }
  return (
    <div>
      {/* {posts.map((post) => {
        {/* // return <div key={post.name}>{post.name}</div>; */}
      {/* // })} */} */}
      <div className="flex space-x-2 justify-center"></div>
      Hello, Card
      {/* <ul></ul> */}
    </div>
  );
};

export default Cards;
