import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket';

it('Rockets renders correctlly', () => {
  const tree = renderer
    .create(<Provider store={store}><Rocket /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
