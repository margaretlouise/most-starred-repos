import React from 'react';

const Error = (props) => {
  const { errorMessage } = props;

  return (
    <div>
      <h3>
        Dang, something isn't working quite right. Try refreshing or come back
        later.
      </h3>
      {errorMessage && (
        <p>Here's what the computer told us the problem is: {errorMessage}</p>
      )}
    </div>
  );
};

export default Error;
