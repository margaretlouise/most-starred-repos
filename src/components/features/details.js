import React from 'react';

const RepoDetails = (props) => {
  let { name, owner, commits } = props;

  return (
    <div>
      <h1>Repo Name: {name}</h1>
      <h2>Repo Owner: {owner}</h2>
      <div>
        <h3>Latest Commits</h3>
        {commits.map((commit) => {
          return (
            <div key={commit.sha}>
              <ul>
                <img
                  src={commit.author.avatar_url}
                  alt="Commit author's avatar"
                />
                <li>Date: {commit.commit.author.date}</li>
                <li>
                  Author: {commit.commit.author.name}{' '}
                  <a
                    href={commit.author.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ({commit.author.login})
                  </a>
                </li>
                <li>Commit Message: {commit.commit.message}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepoDetails;
