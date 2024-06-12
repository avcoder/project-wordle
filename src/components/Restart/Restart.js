import React from 'react';

function Restart({ restart }) {
  return <button className="restart" onClick={() => restart()}>Restart</button>;
}

export default Restart;
