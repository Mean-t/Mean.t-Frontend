import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './container/index';
import NavigationBar from './components/default layout/NavigationBar';

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <React.Fragment>
            <NavigationBar />
              <Switch>
                <Route path='/' component={Main} exact/>
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
