import React from "react";
import { Card } from "antd";
export default function(props) {
  const { ourService } = props;

  return (
    <div className="container-ourService">
      <img className="service-img" src={ourService.imgUrl} alt="" />
      <div className="ourService-details">
        <h2> {ourService.name}</h2>
        <p>{ourService.text.mainTxt}</p>
      </div>
      {/* <Card hoverable cover={<img alt="example" src={ourService.imgUrl} />}>
        <h2> {ourService.name}</h2>
      </Card> */}
    </div>
  );
}
