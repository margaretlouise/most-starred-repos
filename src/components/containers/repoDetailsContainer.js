import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  console.log(commitData);

  if (!hasLoaded) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return <RepoDetails name={repo} owner={owner} commits={commitData} />;
  }
};

export default RepoDetailsContainer;
