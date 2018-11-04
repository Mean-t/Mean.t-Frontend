import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main, Login, Register, CreateFunding, StartFunding, OrderNumber, Checked } from './container/index';
import NavigationBar from './components/default layout/NavigationBar';

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <React.Fragment>
            <NavigationBar />
              <Switch>

                 {/* 메인 페이지 */}
                <Route path='/' component={Main} exact/>

                 {/* 로그인 페이지 */}
                <Route path='/member/login' component={Login} exact/>

                 {/* 회원가입 페이지 */}
                <Route path='/member/join_check' component={Register} exact/>

                 {/* 아이디어 보내기 */}
                <Route path='/funding/create_idea' component={CreateFunding} exact/>

                 {/* 펀딩 시작하기 */}
                <Route path='/funding/start' component={StartFunding} exact/>

                 {/* 주문번호 조회 */}
                <Route path='/order_number/reference' component={Checked} exact/>
                <Route path='/order_number/reference/:orderNumber' component={OrderNumber} exact/>
              </Switch>
            </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
