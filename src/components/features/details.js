import React from 'react';

const RepoDetails = (props) => {
  let { name, owner, commits } = props;

  return (
    <div className="repo-details">
      {!commits.length ? (
        <h2>There were no commits made in the last 24 hours to {name} :(</h2>
      ) : (
        <div>
          <h2>
            {name} - {owner}
          </h2>
          <h3>Commits from the Last 24 Hours</h3>
          <div>
            {commits.map((commit) => {
              const readableCommitDate = new Date(
                commit.commit.author.date
              ).toLocaleString();

              return (
                <div className="commit-card" key={commit.sha}>
                  <img
                    src={commit.author.avatar_url}
                    alt="Commit author's avatar"
                  />
                  <div className="commit-copy">
                    <h4>
                      Commit by: {commit.commit.author.name}{' '}
                      <a
                        href={commit.author.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{commit.author.login}
                      </a>{' '}
                      at <span>{readableCommitDate}</span>
                    </h4>
                    <p>{commit.commit.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RepoDetails;
