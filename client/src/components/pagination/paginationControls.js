import React from 'react';

const PaginationControls = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.length / props.perPage); i++) {
    pageNumbers.push(i);
  }

  const pageButtons = pageNumbers.map((n) => {
    return (
      <button className="Button" key={n} onClick={() => props.handleClick(n)}>
        {n}
      </button>
    );
  });

  return <div className="PageControls">{pageButtons}</div>;
};

export default PaginationControls;
