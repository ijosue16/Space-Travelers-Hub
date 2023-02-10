import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/configurestore';
import NavBar from '../components/Navbar/navbar';
import '@testing-library/jest-dom';

describe('testing navbar', () => {
  test(' navabar text not to render on screen', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.queryByText('missions')).not.toBeInTheDocument();
  });

  test('if text missions renders', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
  });
  it('Navbar renders correctlly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
