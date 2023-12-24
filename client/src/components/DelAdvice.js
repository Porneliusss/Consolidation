import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { delAdvice } from '../http/userApi';

const DelAdvice = ({ show = false, hide, id }) => {

    const delFunction = () => {
        delAdvice(id).then(() => {
            hide()
        })
    }

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Body>
                Вы уверены что хотите удалить?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Отмена
                </Button>
                <Button
                    variant="danger"
                    onClick={() => delFunction()}>
                    Удаить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DelAdvice;