import React from 'react';
import ReactDOM from 'react-dom';
import App from './Compenents/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";

import "./index.scss";
import {Provider} from "react-redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
