import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap';
import { createConsolidation, getAllAddreses } from "../http/consolidationApi";

const CreateConsolidationModel = ({ show = false, hide }) => {
    const [orderPalce, setOrderPlace] = useState([])
    const [endPlace, setEndPlace] = useState("");
    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        getAllAddreses().then((data) => setOrderPlace(data))
    }, [])

    const addConsolidationFunction = () => {
        const formData = new FormData();
        formData.append('endPlace', endPlace);
        formData.append('startDate', startDate);
        formData.append('status', 'Сфоримрована');
        createConsolidation(formData).then(() => hide());
    }

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать потавку</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select
                            style={{ cursor: "pointer" }}
                            value={endPlace}
                            required
                            onChange={(e) => setEndPlace(e.target.value)}
                        >
                            <option disabled value="">
                                Выберите конечный адрес поставки
                            </option>
                            {(() => {
                                const options = [];
                                for (let i = 0; i < orderPalce.length; i++) {
                                    const e = orderPalce[i];
                                    options.push(
                                        <option key={i} value={e.endPlace}>
                                            {e.endPlace}
                                        </option>
                                    );
                                }
                                return options;
                            })()}
                        </Form.Select>
                        <Form.Control required className="mt-2" type="date" value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                            placeholder="Дата начала поставки" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={addConsolidationFunction}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateConsolidationModel;