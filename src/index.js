import React from 'react';
import ReactDOM from 'react-dom';
import reducer, {initialState} from './stateManagement/reducer';
import {StateProvider} from './stateManagement/StateProvider';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
