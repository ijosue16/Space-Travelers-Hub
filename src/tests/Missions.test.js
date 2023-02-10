import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import store from '../redux/configurestore';
import Missions from '../pages/missionslist';
import '@testing-library/jest-dom';

it('missionslist renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('mission test', () => {
  test('check if mission renders empty initially ', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.queryByText('chaicom')).not.toBeInTheDocument();
  });
  it('missionslist renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
