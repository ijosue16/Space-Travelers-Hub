import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../components/myprofile';
import store from '../redux/configurestore';

it('Myprofile renders correctlly', () => {
  const tree = renderer
    .create(<Provider store={store}><MyProfile /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
