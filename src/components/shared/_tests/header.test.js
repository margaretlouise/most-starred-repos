import { shallow } from 'enzyme';

import Header from '../../shared/header';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders the general header', () => {
  const wrapper = shallow(<Header />);
  const header = <h1>Top 100 Most Starred GitHub Repos</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

it('renders the repo list subheader', () => {
  const wrapper = shallow(<Header view={'list'} />);
  const subheader = (
    <h2>
      Finally, an easy to navigate list of the repos we all love (AND their most
      recent commits)!
    </h2>
  );
  expect(wrapper.contains(subheader)).toEqual(true);
});

it('renders the commit list navigation subheader', () => {
  const wrapper = shallow(<Header view={'details'} />);
  const subheaderNav = (
    <h2>
      <a href="/">Go Back to Repo List</a>
    </h2>
  );
  expect(wrapper.contains(subheaderNav)).toEqual(true);
});
