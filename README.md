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

- And I added a few tools I like to use:
  - Prettier
  - React-Router-Dom
  - Enzyme

### Learnings

- I'm happy with what I accomplished, and by the end had a hard time stopping. I went with clean and simple styles, but emphasized the star counts. I opted to route to a details view for the commits list. I think this was a nice way to to keep the repo card view tidy, and get accessibility and mobile friendly styling in a straightforward way.

- The detail path/view for the list of recent commits is, upon further reflection, at least a little overkill. I had spent some time thinking through the UI before implementation, and had envisioned very long lists of commits. When I built it out, I found that many repos didn't even have commits within the last 24 hours - but there was a huge variation in the length of this data, so it _was_ still a tricky UI decision. If I had more time, I would have experimented with a modal view.

- I also ran out of time trying to figure out the best way to test my Repo Details Container component, which I ran into issues testing because of `useParams()` - I spent some time googling and found others had run into the issue, but couldn't come up with a working solution and knew I needed to move on. This is something I'm going to look into further after I turn this in :)

### Next Time

- #1 top Priority: don't refetch the list data when we go back!
- Move API hubbub into a separate file, also break out the commit list from the commit details component view
- Add pagination
- Write more substantial tests - figure out useParams() issue
- More robust error handling (try out Axios?)
