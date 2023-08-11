import React from 'react';
import { Button } from 'antd'

function MegaBoost({ handleClick }) {
  console.log('Render MegaBoost');
  return (
    <Button
      type={'primary'}
      className="mega-boost-button"
      onClick={handleClick}
    >
      MEGA BOOST!
    </Button>
  );
}

export default React.memo(MegaBoost);
