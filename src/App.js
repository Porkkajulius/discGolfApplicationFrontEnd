import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';
import UserDisc from './components/userDisc'
import DiscCharts from './components/discCharts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserDisc/>
          <DiscCharts/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
