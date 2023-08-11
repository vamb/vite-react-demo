// Clock.js
// import React from 'react';
// import moment from "moment";
//
// function Clock() {
//   const time = useTime();
//
//   return (
//     <p className="clock">
//       {format(time, 'hh:mm:ss a')}
//     </p>
//   );
// }

import React from 'react';
import moment from "moment";

function Clock({ time }) {
  return (
    <p className="clock">
      {moment(time).format('YYYY-MM-DD hh:mm:ss')}
    </p>
  );
}

export default Clock;
