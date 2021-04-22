# Top 100 Most Starred GitHub Repos

React App using the GitHub API to display the top 100 most starred repos.

## Want to run the project locally?

1. Clone this repo and `cd` into your local copy
2. Install the dependencies with `npm install` or `yarn install`
3. Run the app with `npm start` or `yarn start`
4. The app will launch a new browser window at [http://localhost:3000](http://localhost:3000)

## Want to run the tests?

- Interactive watch mode can be launched with `npm test` or `yarn test`

### Getting Crisp

- This project was bootstrapped with `create-react-app`

- And I added a few tools that didn't come out of the box with Create React App:
  -- Prettier
  -- React-Router-Dom

### Learnings

- The detail path/view for the list of recent commits is, upon further reflection, at least a little overkill. I had spent some time thinking through the UI before implementation, and had envisioned very long lists of commits. When I built it out, I found that many repos didn't even have commits within the last 24 hours - but there was a huge variation in the length of this data, so it _was_ still a tricky UI decision. If I had more time, I would have experimented with a modal view.

### Next Time

- #1 top Priority: don't refetch the list data when we go back!
- Move API hubbub into a seperate file
- Add pagination
- Write more tests
- More robust error handling (try out Axios?)
