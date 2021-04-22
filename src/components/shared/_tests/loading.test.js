import { shallow } from 'enzyme';

import Loading from '../../shared/loading';

it('renders without crashing', () => {
  shallow(<Loading />);
});
