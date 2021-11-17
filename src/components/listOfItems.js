import React from 'react';

import Buttons from './Buttons';
import Card from '../components/Card';

import '../todo.css';



function listOfItems(props) {
    return (
        <li className={props.item.done ? "done item" : "item"} key={props.item.id}>
            <Card className="card">
                <div className="text">
                    {props.item.text}
                </div>
                <div>
                    <Buttons onDone={props.onDone} item={props.item} onItemDeleted={props.onItemDeleted}></Buttons>

                </div>
            </Card>
        </li>)
}



export default listOfItems;