import React, { useState } from 'react';

const Klaw = () => {
  const [hideBody, setHideBody] = useState(false);

  const handleClick = () => {
    if (!hideBody) {
      document.body.style.opacity = 0;
    } else {
      document.body.style.opacity = 1;
    }
    setHideBody(!hideBody);
  };

  return (
    <div>
      <button onClick={handleClick} className='btn btn-dark'>
        {hideBody ? "Show Body" : "Hide Body"}
      </button>
    </div>
  );
};

export default Klaw;
