import React from 'react';

import '../todo.css';

import img from '../img/lixeira-de-reciclagem.png';
import on from '../img/on.png';
import off from '../img/off.png';

function DoneImg(props) {
    if (props.done) {
        return <img src={on} alt="on"></img>
    }

    else {
        return <img src={off} alt="off"></img>
    }
}

function ButtonDone(props) {
    return (
        <div>
            <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
            <button onClick={() => { props.onItemDeleted(props.item) }}><img src={img} alt="delete"></img></button>
        </div>
    )
}

export default ButtonDone;