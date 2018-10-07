import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main, Login, Register, CreateFunding } from './container/index';
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
                <Route path='/member/login' component={Login} exact/>
                <Route path='/member/join_check' component={Register} exact/>
                <Route path='/create_idea' component={CreateFunding} exact/>
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
