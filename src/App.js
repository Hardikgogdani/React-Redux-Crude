import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from "./component/userContainer";
import './App.css';
import { Table } from 'antd';

function App() {
  return (
    <Provider store={store}>
      <div>
        <UserContainer /><br />
      </div>
    </Provider>
  );
}

export default App;