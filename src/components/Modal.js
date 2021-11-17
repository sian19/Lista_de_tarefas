import React from 'react';

import '../todo.css';

function Modal(props) {

    function hiddenModal(event) {
        let modalTarget = event.target;
        if (modalTarget.id == "modalYes") {
            props.closedModal();
        }

    }

    return (
        <div id="modalYes" onClick={hiddenModal} className={props.show ? "barraModal" : "hideBarraModal"}>
            <div className="modalCard">
                {props.children}
                <div onClick={hiddenModal} id="modalYes" className="closedModal" title="fechar modal">X</div>
            </div>
        </div>
    )
}

export default Modal;