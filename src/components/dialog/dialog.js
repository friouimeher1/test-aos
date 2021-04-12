
import React from 'react';
import { Button, DialogContainer } from 'react-md';

import './style.scss'


const DialogModal = ({ visible, hide, children, title, width, height, action }) => {
    const actions = [];
    actions.push({ secondary: true, children: 'Cancel', onClick: hide });
    actions.push(<Button flat primary onClick={action}>Confirm</Button>);

    return (

        <DialogContainer
            id="simple-action-dialog"
            visible={visible}
            onHide={hide}
            actions={actions}
            title={title}
            width={width}
            height={height}
            className="modal-dialog"

        >
            {children}
        </DialogContainer>

    )
}

export default DialogModal
