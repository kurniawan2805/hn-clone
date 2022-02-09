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
      {data.map((post) => {
        return (
          <div key={post.name}>
            {post.name}
            {post.label.map((lbl) => {
              return (
                <div key={lbl} className="flex space-x-2 justify-center">
                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    {lbl}
                  </span>
                </div>
              );
            })}
            {/* </div> */}
          </div>
        );
      })}
      {/* Hello, Card */}
      {/* <ul></ul> */}
    </div>
  );
};

export default Cards;
