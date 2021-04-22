import { shallow } from 'enzyme';

import Error from '../../shared/error';

it('renders without crashing', () => {
  shallow(<Error />);
});

it('renders the general error message', () => {
  const wrapper = shallow(<Error />);
  const error = (
    <h3>
      Dang, something isn't working quite right. Try refreshing or come back
      later.
    </h3>
  );
  expect(wrapper.contains(error)).toEqual(true);
});

it('renders the extra error details if we have them', () => {
  const wrapper = shallow(<Error errorMessage={'taco taco taco'} />);
  const errorMessage = (
    <p>Here's what the computer told us the problem is: taco taco taco</p>
  );
  expect(wrapper.contains(errorMessage)).toEqual(true);
});
