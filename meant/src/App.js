import React, { Component } from "react";
import Template from "./component/js/Template";
import Topbar from "./component/js/topbar/Topbar";
import Menu from "./component/js/nav/Menu";
import Submain from "./component/js/submain/SubMain";
import Sendidea from "./component/js/submain/send/SendIdea";
import Main from "./component/js/main/Main";
import DressList from "./component/js/main/list/DressList";
import Fotter from "./component/js/fotter/Fotter";
import IdeaList from "./component/js/fotter/list/Idealist";
import {
  _GotoMain,
  _GotoLogin,
  _GotoLookup,
  _SendImage,
  _GotoList,
  _GotoIList
} from "./function";
import axios from "axios";
import "./App.css";

class App extends Component {
  number = 1;

  state = {
    MenuState: "menu-unshow",
    background: "background-gray-unshow",
    id: 0,
    number: 1,
    text: [],
    dresslist: [
      {
        id: 1,
        text: `${this.number}_오버핏/여자/오픈숄더/크롭티/원피스/투피스/소히`,
        image_alt: `옷_${this.number}`,
        list_image: ``
      },
      {
        id: 2,
        text: `${this.number + 1}_오버핏/남자/오픈숄더`,
        image_alt: `옷_${this.number + 1}`,
        list_image: ``
      },
      {
        id: 3,
        text: `${this.number + 2}_패딩/여자/숏패딩`,
        image_alt: `옷_${this.number + 2}`,
        list_image: ``
      },
      {
        id: 4,
        text: `${this.number + 3}_패딩/남자/숏패딩`,
        image_alt: `옷_${this.number + 3}`,
        list_image: ``
      }
    ]
  };

  render() {
    // function_state
    const _OpenSideBar = () => {
      if (
        this.state.MenuState === "menu-unshow" || this.state.background === "background-gray-unshow"
      ) {
        this.setState({
          MenuState: "menu-show",
          background: "background-gray-show"
        });
      } else {
        this.setState({
          MenuState: "menu-unshow",
          background: "background-gray-unshow"
        });
      }
    };

    const _Change_prev = () => {};

    const _Change_next = () => {};

    const _Image = () => {
      // axios.get("URL")
      // .then(res => {
      //   let _image = res.data./*블라블라*/image;
      //   this.setState({
      //     dresslist : [
      //       list_image = `${_image}`
      //     ]
      //   })
      // })
    }

    return (
      <div className="Meant-Main">
        <Template
          back_onClick={_OpenSideBar}
          background_gray={this.state.background}
          topbar={
            <Topbar
              Menu_onClick={_OpenSideBar}
              Rogo_onClick={_GotoMain}
              Topbar_text1={_GotoLogin}
              Topbar_text2={_GotoLookup}
            />
          }
          sidebar={
            <Menu 
              menu_state={this.state.MenuState} 
            />
          }
          submain={
            <Submain 
              sendIdea={
                <Sendidea 
                  SendIdea={_SendImage} 
                />
              } 
            />
          }
          main={
            <Main
              dresslist={_GotoList}
              Change_contents={
                <DressList
                  list_prev={_Change_prev}
                  list_next={_Change_next}
                  dresslist={this.state.dresslist}
                  image={_Image}
                />
              }
            />
          }
          fotter={
            <Fotter
              idea_list={
                <IdeaList
                // 앵기
                />
              }
              more_idea={_GotoIList}
            />
          }
        />
      </div>
    );
  }
}

export default App;
