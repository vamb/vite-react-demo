import React from 'react'
import styled from "styled-components";
import { Canvas } from 'butterfly-dag';
import mockData from './data.js';

import './index.less';
import '../../butterflyDag.css';

class Self1 extends React.Component {

  componentDidMount() {
    const root = document.getElementById('dag-canvas-self1');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          shapeType: 'AdvancedBezier',
          arrow: true
        }
      }
    });
    this.canvas.draw(mockData);
  }

  render() {
    return (
      <Wrapper>
        <div className='decision' style={{backgroundColor: 'lightyellow'}}>
          <div className="decision-canvas" id="dag-canvas-self1" />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled('div')`
  background-color: lightyellow;
  height: 100%;
`

export default Self1
