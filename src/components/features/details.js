import React from 'react';

const RepoDetails = (props) => {
  let { name, owner, commits } = props;

  return (
    <div>
      <h2>Repo Name: {name}</h2>
      <h3>Repo Owner: {owner}</h3>
      <div>
        <h4>Latest Commits</h4>
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
