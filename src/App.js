import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';
import UserDisc from './components/userDisc'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserDisc/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
