import React from "react";
import "../index.css";
const Product1 = (props) => {
  const { imgLink, name, cost } = props;
  return (
    <div className="pro">
      <img src={imgLink} alt={name} />
      <div className="des">
        <span>ayurveda</span>
        <h5>{name}</h5>
        <h4>{cost}</h4>
      </div>
    </div>
  );
};

export default Product1;
