import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/books';
import reportWebVitals from './reportWebVitals';

const initialBookState = {
  books: [
    {
      id: Math.floor(Math.random() * 50),
      title: 'Encarter Dictionary',
      category: 'Kids',
    },
    {
      id: Math.floor(Math.random() * 50),
      title: 'Senior Secondary Physics',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 50),
      title: 'Things Fall Appart',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialBookState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
