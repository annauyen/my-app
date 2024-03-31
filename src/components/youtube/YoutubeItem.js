import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className="youtubeItem">
        <div className="itemThumbnail">
          <img src={props.thumbnail} alt="" className="imageThumbnail" />
        </div>
        <div className="itemFooter">
          <div className="footerPicture">
            <img src={props.authorPicture} alt="" className="authorPicture" />
          </div>
          <div className="footerTitle">
            <h3 className="title">{props.title}</h3>
            <h4 className="authorName">{props.authorName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
