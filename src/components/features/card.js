import React from "react";

const RepoCard = (props) => {
  const { name, starCount, url } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>Star Count: {starCount}</p>
      <p>{url}</p>
    </div>
  );
};

export default RepoCard;
