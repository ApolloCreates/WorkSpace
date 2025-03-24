import React from "react";

const SummaryCard = ({icon,text,number}) => {
  return (
    <>
      <div className="">
        <div className="">{icon}</div>
        <div className="">
          <p>{text}</p>
          <p>{number}</p>
        </div>
      </div>
    </>
  );
};

export default SummaryCard;
