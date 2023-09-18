import React, {Component} from 'react';
import {Canvas} from 'butterfly-dag';

import mockData from './data';

import '../../butterflyDag.css';
import './index.less';

class Diodes extends Component {
  componentDidMount() {
    let root = document.getElementById('dag-canvas-7');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          shapeType: 'Manhattan',
          defaultAnimate: true
        }
      }
    });
    this.canvas.draw(mockData);
  }

  render() {
    return (
      <div className='diodes-page' style={{backgroundColor: 'lightpink'}}>
        <div className="diodes-canvas" id="dag-canvas-7">
        </div>
      </div>
    );
  }
}

export default Diodes
