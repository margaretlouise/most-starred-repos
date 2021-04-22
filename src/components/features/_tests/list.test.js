import { shallow } from 'enzyme';

import RepoList from '../../features/list';

it('renders without crashing', () => {
  shallow(<RepoList />);
});

it('renders a no repos found paragraph if there are none', () => {
  const wrapper = shallow(<RepoList repos={[]} />);
  const noRepos = <p>No repos found</p>;
  expect(wrapper.contains(noRepos)).toEqual(true);
});
