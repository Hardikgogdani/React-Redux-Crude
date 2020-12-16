import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import UserContainer from "./component/userContainer";
import './App.css';

function App() {
  return (
      <Provider store={store}>
        <div>
          <UserContainer/>
        </div>
      </Provider>
  );
}

export default App;