import React from 'react';

const Ghost = (props) => {
  const selectGhost = props.selectGhost;
  const ghost = props.ghost;

  return(
    <div>
      <img src={ghost} alt="" onClick={() => selectGhost(props.gname)}/>
    </div>
  );
};

export default Ghost
