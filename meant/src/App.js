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

  number = 1;

  state = {
    MenuState : "menu-unshow",
    background : "background-gray-unshow",
    id : 0,
    number : 1,
    dresslist : [
      {id : 1, text : `${this.number}_오버핏/여자/오픈숄더`, image : `옷_${this.number}`},
      {id : 2, text : `${this.number + 1}_오버핏/남자/오픈숄더`, image : `옷_${this.number + 1}`},
      {id : 3, text : `${this.number + 2}_패딩/여자/숏패딩`, image : `옷_${this.number + 2}`},
      {id : 4, text : `${this.number + 3}_패딩/남자/숏패딩`, image : `옷_${this.number + 3}`}
    ]
  }

  render() {

    // function_state
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

    const _Change_prev = () => {

    }

    const _Change_next = () => {

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
              list_prev = {_Change_prev}
              list_next = {_Change_next}
              fund_text1 = {this.state.dresslist[this.state.id].text}
              dress_number1 = {this.state.dresslist[this.state.id].image}
              fund_text2 = {this.state.dresslist[this.state.id + 1].text}
              dress_number2 = {this.state.dresslist[this.state.id + 1].image}
              fund_text3 = {this.state.dresslist[this.state.id + 2].text}
              dress_number3 = {this.state.dresslist[this.state.id + 2].image}
              fund_text4 = {this.state.dresslist[this.state.id+ 3].text}
              dress_number4 = {this.state.dresslist[this.state.id + 3].image}
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
