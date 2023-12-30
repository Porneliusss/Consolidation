import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const UpdCar = ({ show = false, hide, Ok }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Выберитие посылку
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdCar;