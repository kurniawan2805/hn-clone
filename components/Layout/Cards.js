import * as timeago from "timeago.js";

const Cards = ({ posts }) => {
  // console.log(posts);
  const data = [];
  for (let [key, value] of Object.entries(posts)) {
    // console.log(value);
    data.push(value);
  }
  return (
    <div className="bg-light-lgt">
      {data.map((post) => {
        return (
          <div
            key={post.name}
            className="bg-white rounded-lg p-4 cursor-pointer mb-4"
          >
            <div className="text-primary text-sm font-bold mb-2">
              {post.name}
            </div>
            <div className="mb-1 flex flex-wrap items-center">
              {post.label.map((lbl) => {
                return (
                  <label
                    key={lbl}
                    className="text-opacity-70 text-xs mb-1 py-0.5 px-2 font-bold mr-2 bg-primary/25 text-base-primary rounded-md"
                  >
                    {lbl}
                  </label>
                );
              })}
            </div>
            <div className="text-primary text-sm overflow-auto break-words">
              {post.question}
            </div>
            <div className="text-primary/50 text-sm mt-2">
              {timeago.format(post.created)}
            </div>
            <hr className="mt-4" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
