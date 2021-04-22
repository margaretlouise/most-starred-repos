import React from 'react';

// components
import RepoCard from './card';

const RepoList = (props) => {
  const { repos } = props;

  if (!repos || repos.length === 0) return <p>No repos found</p>;

  return (
    <div>
      {repos.map((repo) => {
        return (
          <RepoCard
            key={repo.id}
            name={repo.name}
            starCount={repo.stargazers_count}
            description={repo.description}
            url={repo.html_url}
            owner={repo.owner.login}
          />
        );
      })}
    </div>
  );
};

export default RepoList;
