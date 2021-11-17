import React from 'react';

import ListOfItems from '../components/listOfItems';

import '../todo.css';

function List(props) {

    return (
        <ul>
            {props.items.map((item) => <ListOfItems key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListOfItems>)}
        </ul>
    );
}

export default List;