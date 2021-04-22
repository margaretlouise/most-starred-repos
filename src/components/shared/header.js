import React from 'react';

const Header = (props) => {
  const { view } = props;

  return (
    <div className="header">
      <h1>Top 100 Most Starred GitHub Repos</h1>
      {view === 'list' && (
        <h2>
          Finally, an easy to navigate list of the repos we all love (AND their
          most recent commits)!
        </h2>
      )}
      {view === 'details' && (
        <h2>
          <a href="/">Go Back to Repo List</a>
        </h2>
      )}
    </div>
  );
};

export default Header;
