import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../components/myprofile';
import store from '../redux/configurestore';
import '@testing-library/jest-dom';

describe('tests for my profile', () => {
  test('test if my rockets is present in file and has no class', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.queryByText(/rockets reserved/i)).toBeNull();
    expect(screen.queryByText(/My rockets/i)).not.toHaveClass();
  });

  it('Myprofile renders correctlly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
