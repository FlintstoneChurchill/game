import React from 'react';
import './Cell.css';

const Cell = (props) => {
    return <div className={props.cellClass} onClick={props.click}></div>
};

export default Cell;
