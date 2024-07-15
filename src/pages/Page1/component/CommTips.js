import React from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

const CommTips = ({ placement, title }) => {
  return (
    <Tooltip placement={placement || 'right'} title={title}>
      <InfoCircleOutlined className={'info-icon'} />
    </Tooltip>
  )
}

export default CommTips
