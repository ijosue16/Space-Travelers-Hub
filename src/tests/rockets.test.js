import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Rocket from '../components/Rocket';
import store from '../redux/configurestore';
import '@testing-library/jest-dom';

describe('rockets test', () => {
  test('check if rocket renders empty initially', () => {
    render(<Provider store={store}><Rocket /></Provider>);
    expect(screen.queryByText('falcon')).not.toBeInTheDocument();
  });

  test('Rockets renders correctlly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
