import { Node } from 'butterfly-dag';
import $ from 'jquery';
import './node.less';

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
    this.options = opts;
    // console.log('BaseNode opts', opts, typeof opts.label, opts.label)
  }
  draw = (opts) => {
    let container = $('<div class="decision-node"></div>')
      .attr('id', opts.id)
      .css('top', opts.top + 'px')
      .css('left', opts.left + 'px');

    this._createTypeIcon(container);
    this._createText(container);

    return container[0];
  }
  _createTypeIcon(dom = this.dom) {
    const iconContainer = $(`<span class="icon-box ${this.options.className}"></span>`)[0];
    const icon = $(`<i class="iconfont ${this.options.iconType}"></i>`)[0];

    iconContainer.append(icon);
    $(dom).append(iconContainer);
  }


  _createText(dom = this.dom) {
    if(this.options.label) {
      $('<span class="text-box"></span>').text(this.options.label).appendTo(dom);
    }else if(this.options.labelObj){
      const { caseName, caseNo } = this.options.labelObj
      const caseNameLabel = `案件名称: ${caseName}`
      const caseNoLabel = `案件编号: ${caseNo}`
      const labelContainer = $(`<div><div>${caseNameLabel}</div><div>${caseNoLabel}</div></div>`)
      $('<span class="text-box"></span>').append(labelContainer).appendTo(dom)
    }
  }
}

export default BaseNode;
