import React, {Component} from 'react';
import {Canvas} from 'butterfly-dag';
import mockData from './data.js';

import './index.less';
import './iconfont.css';
import '../../butterflyDag.css';

class Policy extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas-20');
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
      <div className='policy-page'>
        <div className="policy-canvas" id="dag-canvas-20">
        </div>
      </div>
    );
  }
}

export default Policy
