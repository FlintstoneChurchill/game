import React from 'react';
import Cell from './Cell/Cell';
import './Field.css';

const Field = (props) => {
    return (
        <div className="Field">
            {props.cells.map(cell => <Cell click={() => props.click(cell.id)} key={cell.id}
                                           cellClass={cell.cellClass.join(' ')}/>)}
        </div>
    );
};

export default Field;

