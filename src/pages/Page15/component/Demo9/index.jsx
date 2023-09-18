import {Canvas} from 'butterfly-dag';
import React, {Component} from 'react';

import mockData from './data.js';

import './index.less';
import '../../butterflyDag.css';

class Emergency2 extends Component {
  componentDidMount() {
    let root = document.getElementById('dag-canvas-9');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          type: 'Manhattan',
          arrow: true
        },
        // 拖动边缘处自动适应画布
        autoFixCanvas: {
          enable: true
        }
      }
    });
    this.canvas.draw(mockData);
  }

  render() {
    return (
      <div className='emergency2-page'>
        <div className="emergency2-canvas" id="dag-canvas-9">
        </div>
      </div>
    );
  }
}

export default Emergency2
