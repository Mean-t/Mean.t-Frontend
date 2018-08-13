import React, { Component } from 'react';
import Template from './component/js/Template';
import Topbar from './component/js/topbar/Topbar';
import Menu from './component/js/nav/Menu';
import Submain from './component/js/submain/SubMain';
import Sendidea from './component/js/submain/send/SendIdea';
import Main from './component/js/main/Main';
import DressList from './component/js/main/list/DressList';
import Fotter from './component/js/fotter/Fotter';
import IdeaList from './component/js/fotter/list/Idealist';
import { _GotoMain, _GotoLogin, _GotoLookup, _SendImage, _GotoList, _GotoIList } from './function';
import './App.css';

class App extends Component {

  state = {
    MenuState : "menu-unshow",
    background : "background-gray-unshow"
  }

  render() {
    const _OpenSideBar = () => {
      if (this.state.MenuState === "menu-unshow" || this.state.background === "background-gray-unshow") {
        this.setState({
          MenuState : "menu-show",
          background: "background-gray-show"
        })
      } else {
        this.setState({
          MenuState : "menu-unshow",
          background: "background-gray-unshow"
        })
      }
    }

    return (
      <div className="Meant-Main">
        <Template 
          back_onClick = {_OpenSideBar}
          background_gray = {this.state.background}
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
          main = {<Main
            dresslist = {_GotoList}
            Change_contents = {<DressList
              // 앙기
            />}
          />}
          fotter = {<Fotter
            idea_list = {<IdeaList
              // 앵기
            />}
            more_idea = {_GotoIList}
          />}
        />
      </div>
    );
  }
}

export default App;
