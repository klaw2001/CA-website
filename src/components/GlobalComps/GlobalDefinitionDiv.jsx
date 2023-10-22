import React from "react";

const GlobalDefinitionDiv = ({title,para}) => {
  return (
    <div className="global-definition">
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};

export default GlobalDefinitionDiv;
