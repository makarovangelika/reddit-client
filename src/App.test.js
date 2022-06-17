import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import mockFetch from './mocks/mockFetch';

test('renders the landing page', async () => {
  render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByAltText('reddit logo')).toBeInTheDocument();
  expect(screen.getByAltText('search icon')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search Reddit')).toHaveDisplayValue('');
  expect(document.querySelector('.search-bar')).toBeInTheDocument();
  expect(await screen.findByTestId('subreddit-menu')).toBeInTheDocument();
  expect(await screen.findByTestId('subreddit-posts')).toBeInTheDocument();
  expect(document.querySelector('.subreddit-title')).toBeInTheDocument();
  expect(document.querySelector('.loading')).toBeInTheDocument();
});

test('render the page with post after clicking on the post', async () => {
  render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );
  //Simulate clicking on the link to the post
  expect(await screen.findByTestId('vdczrm')).toBeInTheDocument();
  let link = screen.getByTestId('vdczrm');
  const user = userEvent.setup();
  await user.click(link);
  expect(screen.getByTestId('post-card')).toBeInTheDocument();
});

test('should be able to search and display search results', async () => {
  render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );
  //Simulate typing the term into input field and verifying its value
  let input = document.getElementById('search-input');
  expect(input).toBeInTheDocument();
  const user = userEvent.setup();
  await user.type(input, 'news');
  expect(input).toHaveValue('news');
  //Simulate initiating the search request
  await user.type(input, '{enter}');
  //Verify reddits' display and results count
  let results = document.querySelectorAll('.reddit-card');
  expect(results).toHaveLength(25);
  results.forEach(result => expect(result).toBeInTheDocument());
});

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})
afterEach(() => {
  jest.restoreAllMocks();
});