import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// shared components
import LoadingSpinner from '../shared/loading';
import Error from '../shared/error';
import Header from '../shared/header';

// feature components
import RepoDetails from '../features/details';

const RepoDetailsContainer = () => {
  let { owner, repo } = useParams();

  const [error, setError] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [commitData, setCommitData] = useState([]);

  useEffect(() => {
    // Calculate 24 Hours ago in ISO8601 format (YYYY-MM-DDTHH:MM:SSZ) --
    // Current time less 24 hrs * 60 minutes * 60 seconds * 1000 (milliseconds)
    const twentyFourHoursAgo = new Date(
      Date.now() - 24 * 60 * 60 * 1000
    ).toISOString();

    // This search query returns all the commits made on a specific repo within
    // the last twenty four hours
    const searchQuery = `?since=${twentyFourHoursAgo}`;

    fetch(`https://api.github.com/repos/${owner}/${repo}/commits${searchQuery}`)
      .then((response) => response.json())
      .then((commitData) => {
        setCommitData(commitData);
        setHasLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setHasLoaded(true);
      });
  }, [owner, repo]);

  if (!hasLoaded) {
    return <LoadingSpinner />;
    // Handle network failures
  } else if (error) {
    return <Error errorMessage={error.message} />;
    // Handle errors from our API call
  } else if (commitData.message) {
    return <Error errorMessage={commitData.message} />;
  } else {
    return (
      <div>
        <Header view="details" />
        <RepoDetails name={repo} owner={owner} commits={commitData} />
      </div>
    );
  }
};

export default RepoDetailsContainer;
