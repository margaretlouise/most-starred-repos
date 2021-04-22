import React from 'react';

const Header = (props) => {
  const { view } = props;

  return (
    <div>
      <h1>Top 100 Most Starred GitHub Repos</h1>
      {view === 'list' && (
        <h3>
          Finally, an easy to navigate list of the repos we all love (AND their
          most recent commits!)
        </h3>
      )}
      {view === 'details' && <a href="/">Go Back</a>}
    </div>
  );
};

export default Header;
