import React, { Component } from 'react';
import Template from './component/js/Template';
import Topbar from './component/js/topbar/Topbar';
import Menu from './component/js/topbar/nav/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Meant-Main">
        <Template 
          topbar = {<Topbar
            navigation = {<Menu
            />}
          />}
        />
      </div>
    );
  }
}

export default App;
