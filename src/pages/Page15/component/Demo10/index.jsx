import React, {Component} from 'react';
import {Canvas} from 'butterfly-dag';

import mockData from './data.js';

import './index.less';
import '../../butterflyDag.css';

class Entity extends Component {
  componentDidMount() {
    let root = document.getElementById('dag-canvas-10');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          shapeType: 'Straight',
          arrow: true
        }
      }
    });
    this.canvas.draw(mockData);
  }

  render() {
    return (
      <div className='entity-page'>
        <div className="entity-canvas" id="dag-canvas-10">
        </div>
      </div>
    );
  }
}

export default Entity
