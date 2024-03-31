import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div>
      <div className="myList">
        {YoutubeData.map((item, index) => (
          <YoutubeItem
            key={item.id}
            thumbnail={item.image}
            title={item.title}
            authorName={item.author}
            authorPicture={item.avatar}
          ></YoutubeItem>
        ))}
      </div>
    </div>
  );
};

export default YoutubeList;
