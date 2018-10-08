import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main, Login, Register, CreateFunding, StartFunding, OrderNumber } from './container/index';
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
                <Route path='/funding/create_idea' component={CreateFunding} exact/>
                <Route path='/funding/start' component={StartFunding} exact/>
                <Route path='/OrderNumber/reference' component={OrderNumber} exact/>
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
