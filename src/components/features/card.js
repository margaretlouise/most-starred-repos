import React from 'react';
import { Link } from 'react-router-dom';

const RepoCard = (props) => {
  const { name, starCount, description, url, owner } = props;
  return (
    <div className="repo-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </p>
      <div className="star-count">
        <p>{starCount.toLocaleString()} ⭐️</p>
      </div>
      <Link className="commit-link" to={`/details/${owner}/${name}`}>
        Go to Latest Commits
      </Link>
    </div>
  );
};

export default RepoCard;
