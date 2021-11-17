import React from 'react';
import { useState } from "react/cjs/react.development";

import '../todo.css';

function TodoForm(props) {

    const [text, setText] = useState('');


    function chance(eve) {
        var t = eve.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        let textEmpt = text.trim();
        if (textEmpt !== "") {
            props.onAddItem(textEmpt);
            setText("");
        }

        else {
            alert('Não se pode registrar em branco a tarefa!')
        }
    }

    function delAll(event) {
        event.preventDefault()
        props.deleteAll();
    }

    return (
        <form action="">
            <h3>Digite a tarefa abaixo:</h3>
            <input type="text" onChange={chance} value={text}></input>
            <button onClick={addItem}>Add</button>
            <button onClick={delAll}>Clear all</button>
        </form>
    )
}

export default TodoForm;