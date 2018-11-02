import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import styled from 'styled-components'
import Axios from 'axios';

class TagClude extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }

  componentDidMount() {
    Axios.get('')
    .then((res) => {
      console.log(res.data);
      
    })
  };

  render() { 
    return ( 
      <TagCloud
        style={{
          fontFamily : 'NanumSquareRound',
          fontSize : 42,
          color : '#26B0A7',
          padding : 12,
          width : '100%',
          height : '100%',
          
        }}>
        <div style={{fontSize : 42}}>1asdfasdfasdfsad</div>
        <div style={{fontSize : 22}}>2fasdfsdfasd</div>
        <div style={{fontSize : 22}}>3fasdfasdfasd</div>
        <div style={{fontSize : 42}}>fasdfasdfasd4</div>
        <div style={{fontSize : 22}}>fasdfasdfas5</div>
        <div style={{fontSize : 22}}>dfasdfasdf6</div>
        <div style={{fontSize : 42}}>7asdfasdfasd</div>
        <div style={{fontSize : 22}}>8fasdfasd</div>
        <div style={{fontSize : 22}}>9fasdfasdfasd</div>
        <div style={{fontSize : 42}}>10fasdfasdfasd</div>
        <div style={{fontSize : 22}}>11fasdfasdf</div>
        <div style={{fontSize : 22}}>1asdfasdfasd2</div>
        <div style={{fontSize : 42}}>13fasdfasdf</div>
        <div style={{fontSize : 22}}>1asdfasdfasdfas4</div>
        <div style={{fontSize : 22}}>15asdfasdf</div>
        <div style={{fontSize : 42}}>asdfasdfasddfasdfasdf16</div>
        <div style={{fontSize : 22}}>1fasdfasdfasd7</div>
        <div style={{fontSize : 22}}>1fasdfasdf8</div>
        <div style={{fontSize : 42}}>asdfasdf19</div>
        <div style={{fontSize : 22}}>2asdfasdf0</div>
      </TagCloud>
     );
  }
}
 
export default TagClude;