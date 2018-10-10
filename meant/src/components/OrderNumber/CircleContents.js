import React, { Component } from 'react';
import styled from 'styled-components';

class CircleContents extends Component {
  render() {
    const { PerfectionGauge } = this.props;
    return (
      <CircleCollection>
        {
          PerfectionGauge >= 0 ?
          <CircleLine p0>
            <Circle />
          </CircleLine> : 
          <DelCircleLine p0>
            <Circle />
          </DelCircleLine>
        }
        {
          PerfectionGauge >= 25 ?
          <CircleLine p25>
            <Circle />
          </CircleLine> : 
          <DelCircleLine p25>
            <Circle />
          </DelCircleLine>
        }
        {
          PerfectionGauge >= 50 ?
          <CircleLine p50>
            <Circle />
          </CircleLine> : 
          <DelCircleLine p50>
            <Circle />
          </DelCircleLine>
        }
        {
          PerfectionGauge >= 75 ?
          <CircleLine p75>
            <Circle />
          </CircleLine> : 
          <DelCircleLine p75>
            <Circle />
          </DelCircleLine>
        }
        {
          PerfectionGauge >= 100 ?
          <CircleLine p100>
            <Circle />
          </CircleLine> : 
          <DelCircleLine p100>
            <Circle />
          </DelCircleLine>
        }
      </CircleCollection>
    );
  }
}

const CircleCollection = styled.div`
  width : 900px;
  height : 40px;
  display : flex;
  position : absolute;
`;

const CircleLine = styled.div`
  width : 37px;
  height : 37px;
  border : 3px solid #40CD9F;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  align-items : center;
  position : absolute;
  left : ${props => {
    if(props.p0) return '0%';
    else if(props.p25) return '25%';
    else if(props.p50) return '50%';
    else if(props.p75) return '75%';
    else if(props.p100) return '100%';
    else return 'none';
  }};
`;

const DelCircleLine = CircleLine.extend`
  border : none;
`;

const Circle = styled.div`
  width : 30px;
  height : 30px;
  background-color : #40CD9F;
  border-radius : 60px;
`;

export default CircleContents;