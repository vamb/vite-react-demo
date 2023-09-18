import React from 'react';
import ReactButterfly from 'butterfly-react';

import data from './data.js';
import './index.less';

const ReactSample = () => {
  return (
    <ReactButterfly
      {...data}
    />
  );
};

export default ReactSample
