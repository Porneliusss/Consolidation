import React, { useEffect, useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { getConsolidationByOrderId } from "../http/consolidationApi";

const ConsolidationModel = ({ show = false, hide, id }) => {
    const [consalidation, setConsolidation] = useState()

    useEffect(() => {
        id ?
            getConsolidationByOrderId(id).then((data) => setConsolidation(data))
            :
            console.log()
    }, [id])

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header>
                    <Modal.Title>
                        Информация о поставке
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Ход доставки</h6>
                    {consalidation ?
                        <>
                            <ProgressBar animated now={
                                consalidation.status === "Сфоримрована" ? 20 : 
                                consalidation.status === "Доставляется" ? 50 : 
                                consalidation.status === "Готов" ? 100 : 100 
                            }>
                            </ProgressBar>
                            <h6 className="mt-2">Статус: {consalidation.status}</h6>
                        </>
                        :
                        <>
                        </>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={hide}>
                        Назад
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ConsolidationModel;