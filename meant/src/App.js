import React, { Component } from 'react';
import Template from './component/js/Template';
import Topbar from './component/js/topbar/Topbar';
import Menu from './component/js/nav/Menu';
import Submain from './component/js/submain/SubMain';
import Sendidea from './component/js/submain/send/SendIdea';
import { _GotoMain, _GotoLogin, _GotoLookup, _SendImage } from './function';
import './App.css';

class App extends Component {

  state = {
    MenuState : "menu-unshow"
  }

  render() {
    const _OpenSideBar = () => {
      if (this.state.MenuState === "menu-unshow") {
        this.setState({
          MenuState : "menu-show"
        })
      } else {
        this.setState({
          MenuState : "menu-unshow"
        })
      }
    }

    return (
      <div className="Meant-Main">
        <Template 
          topbar = {<Topbar
            Menu_onClick = {_OpenSideBar}
            Rogo_onClick = {_GotoMain}
            Topbar_text1 = {_GotoLogin}
            Topbar_text2 = {_GotoLookup}
          />}
          sidebar = {<Menu 
            menu_state = {this.state.MenuState}
          />}
          submain = {<Submain
            sendIdea = {<Sendidea 
              SendIdea = {_SendImage}
            />}
          />}
        />
      </div>
    );
  }
}

export default App;
