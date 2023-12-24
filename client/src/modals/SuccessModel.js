import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';

const SuccessModel = ({ show = false, hide, Ok }) => {
    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>{
                        Ok ?
                            <p style={{color: "green"}}>
                                Опирация обработана успешно
                            </p>
                            :
                            <p style={{color: "red"}}>
                                Ошибка операции
                            </p>
                    }</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant={Ok ? "success" : "danger"} onClick={hide}>
                        Готово
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SuccessModel;