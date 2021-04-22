import React from 'react';
import { Link } from 'react-router-dom';

const RepoCard = (props) => {
  const { name, starCount, description, url, owner } = props;
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>Star Count: {starCount}</li>
        <li>Description: {description}</li>
        <li>
          URL:{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </li>
      </ul>
      <Link to={`/details/${owner}/${name}`}>Go to Latest Commits</Link>
    </div>
  );
};

export default RepoCard;
