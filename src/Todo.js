import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

import List from './components/List';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';


import Item from './components/item';

import './todo.css';

let items_Save = "itemsSave";

function Todo() {

    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        let itemsSave = JSON.parse(localStorage.getItem(items_Save));

        if (itemsSave) {
            setItems(itemsSave)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(items_Save, JSON.stringify(items));
    }, [items])

    function onAddItem(text) {


        let it = new Item(text);
        let checkText = null;

        if (items.length === 0) {
            setItems([it, ...items]);
        }

        else {
            checkText = items.filter(item => text === item.text);
            if (checkText.length === 0) {
                setItems([it, ...items]);
            }

            else {
                alert('A tarefa já foi adcionada!')
            }

        }

        setShow(false);


    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }

    function onDone(item) {
        let updateItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }

            return it
        })

        setItems(updateItems);

    }

    function deleteAll() {
        setItems([]);
    }

    function closedModal() {
        setShow(false)
    }

    return (
        <div className="global">
            <div className="container">
                <header className='header'>
                    <h2>Lista de tarefas</h2>
                    <button onClick={() => {
                        setShow(true)
                    }} className='addButton'>+</button>
                </header>

                <Modal show={show} closedModal={closedModal}> <TodoForm onAddItem={onAddItem} deleteAll={deleteAll}></TodoForm> </Modal>
            </div >

            <div className="main">
                <List onItemDeleted={onItemDeleted} items={items} onDone={onDone}></List>
            </div>
            <footer>Sean Taron</footer>
        </div>
    )


}

export default Todo;

