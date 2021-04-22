import { shallow } from 'enzyme';

import Card from '../../features/card';

it('renders without crashing', () => {
  shallow(<Card starCount={9809234} />);
});

it('renders the passed in name prop', () => {
  const wrapper = shallow(<Card starCount={9809234} name={'bunny'} />);
  const name = <h3>bunny</h3>;
  expect(wrapper.contains(name)).toEqual(true);
});

it('renders the star count with commas', () => {
  const wrapper = shallow(<Card starCount={9809234} />);
  const starCount = <p>9,809,234 ⭐️</p>;
  expect(wrapper.contains(starCount)).toEqual(true);
});
