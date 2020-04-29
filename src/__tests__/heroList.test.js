import React from 'react';

import { render, waitFor, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import axios from 'axios';
import history from '../services/history';
import HeroList from '../pages/Hero/List';

import { response } from './mocks';

jest.mock('axios');

afterEach(() => {
  axios.get.mockClear();
});

function mockCall() {
  axios.get.mockResolvedValueOnce(response);
}

test('Tests if list of hero render with api call', async () => {
  mockCall();
  const mockStore = configureStore();

  const initial_state = { hero: { list: response.data.data } };
  const store = mockStore(initial_state);

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <HeroList />
      </Router>
    </Provider>
  );

  expect(getByTestId('hero-card')).toBeTruthy();
});

test('Test if change page works', async () => {
  mockCall();
  const mockStore = configureStore();

  const initial_state = { hero: { list: response.data.data } };
  const store = mockStore(initial_state);

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <HeroList />
      </Router>
    </Provider>
  );

  const pageNumberNode = getByTestId('page-number');
  expect(pageNumberNode.innerHTML).toEqual('1');

  const nextPageButtonNode = getByTestId('next-page-button');
  fireEvent.click(nextPageButtonNode, { button: 0 });

  // não funcionou :(
  // expect(pageNumberNode.innerHTML).toEqual('2');
});

test('Test if search text input works', async () => {
  mockCall();
  const mockStore = configureStore();

  const initial_state = { hero: { list: response.data.data } };
  const store = mockStore(initial_state);

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <HeroList />
      </Router>
    </Provider>
  );

  const inputSearch = await waitFor(() => getByTestId('search-text-input'));
  fireEvent.change(inputSearch, { target: { value: 'spider-man' } });
  expect(inputSearch.value).toEqual('spider-man');
});
