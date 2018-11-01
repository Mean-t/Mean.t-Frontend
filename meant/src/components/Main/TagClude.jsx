import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
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
          fontSize : 16,
          color : '#26B0A7',
          padding : 16,
          width : '100%',
          height : '100%',
          
        }}>
        <div>react</div>
        <div>tag</div>
        <div>cloud</div>
      </TagCloud>
     );
  }
}
 
export default TagClude;