import React from 'react';

import '../todo.css';

function Card(props) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card;