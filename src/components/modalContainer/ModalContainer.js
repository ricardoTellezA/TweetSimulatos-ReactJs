import React from 'react'
import { Modal } from '@material-ui/core';
import './modalContainer.scss';

export const ModalContainer = (props) => {

    const {isOpenModal,closeModal,children} = props;
    return (
       <Modal
       className="modal-container"
       open={isOpenModal}
       onClose={closeModal}
       closeAfterTransition
       >
           <div>{children}</div>
       </Modal>
    )
}
