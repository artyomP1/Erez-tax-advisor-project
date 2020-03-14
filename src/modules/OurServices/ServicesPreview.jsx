import React from "react";
export default function(props) {
  const { ourService } = props;

  return (
    <div className="container-ourService">
      <img className="service-img" src={ourService.imgUrl} alt="" />
      <div className="ourService-details">
        <h2> {ourService.name}</h2>
        <p>{ourService.text.homePageTxt}</p>
      </div>
    </div>
  );
}
