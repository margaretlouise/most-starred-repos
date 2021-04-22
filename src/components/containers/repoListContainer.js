import React, { useEffect, useState } from 'react';

// shared components
import LoadingSpinner from '../shared/loading';
import Error from '../shared/error';
import Header from '../shared/header';

// feature components
import RepoList from '../features/list';

const RepoListContainer = () => {
  const [error, setError] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    // This search query returns an object including a sorted (by star count)
    // list of 100 repos with star counts greater than 40,000
    // ex: { total_count: number, incomplete_results: bool, items: array }
    const searchQuery = '?q=stars:>40000&sort=stars&per_page=100';

    fetch(`https://api.github.com/search/repositories${searchQuery}`)
      .then((response) => response.json())
      .then((repoData) => {
        setRepoData(repoData);
        setHasLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setHasLoaded(true);
      });
  }, []);

  if (!hasLoaded) {
    return <LoadingSpinner />;
    // Handle network failures
  } else if (error) {
    return <Error />;
    // Handle errors from our API call
  } else if (repoData.message) {
    return <Error errorMessage={repoData.message} />;
  } else {
    return (
      <div>
        <Header view="list" />
        <RepoList repos={repoData.items} />
      </div>
    );
  }
};

export default RepoListContainer;
