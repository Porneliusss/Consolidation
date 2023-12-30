import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createCar } from '../http/consolidationApi';

const CreateCar = ({ show = false, hide }) => {
    const [startPlace, setStartPlace] = useState('');
    const [endPlace, setEndPlace] = useState('');
    const [trunkVolume, setTrunkVolume] = useState('');
    const [number, setCarNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            startPlace,
            endPlace,
            trunkVolume,
            number  
        };

        createCar(newCar).then(() => hide()) 
    };

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить автомобиль</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="startPlace">
                            <Form.Label>Место отправления</Form.Label>
                            <Form.Control
                                type="text"
                                value={startPlace}
                                onChange={(e) => setStartPlace(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="endPlace">
                            <Form.Label>Место назначения</Form.Label>
                            <Form.Control
                                type="text"
                                value={endPlace}
                                onChange={(e) => setEndPlace(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="status">
                            <Form.Label>Объем багажника</Form.Label>
                            <Form.Control
                                type="number"
                                value={trunkVolume}
                                onChange={(e) => setTrunkVolume(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="number">
                            <Form.Label>Номер машины</Form.Label>
                            <Form.Control
                                type="number"
                                value={number}
                                onChange={(e) => setCarNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Добавить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateCar;