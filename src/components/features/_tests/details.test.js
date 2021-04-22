import { shallow } from 'enzyme';

import RepoDetails from '../../features/details';

it('renders without crashing', () => {
  shallow(<RepoDetails commits={[]} />);
});

it('renders a no recent commits header if there are none', () => {
  const wrapper = shallow(<RepoDetails commits={[]} name={'sad repo'} />);
  const noRecentCommits = (
    <h2>There were no commits made in the last 24 hours to sad repo :(</h2>
  );
  expect(wrapper.contains(noRecentCommits)).toEqual(true);
});
