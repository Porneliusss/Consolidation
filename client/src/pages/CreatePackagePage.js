import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createPackage } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { PROFIL_ROUTE } from '../utils/consts';

const CreatePackagePage = () => {
    const [startPlace, setStartPlace] = useState('');
    const [endPlace, setEndPlace] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');

    const navigate = useNavigate()

    const handleCreatePackage = (e) => {
        e.preventDefault();
        const id = localStorage.getItem('userId')

        const pack = {
            startPlace,
            endPlace,
            weight,
            length,
            width,
            userId: id
        }

        createPackage(pack).then(navigate(PROFIL_ROUTE + '/' + id))

        console.log('Данные для создания посылки:', {
            pack
        });
    };

    return (
        <Container
            style={{ color: 'white', height: '100vh' }}
        >
            <h1>Создать посылку</h1>
            <Form onSubmit={handleCreatePackage}>
                <Form.Group controlId="startPlace">
                    <Form.Label>Место отправления</Form.Label>
                    <Form.Control
                        type="text"
                        value={startPlace}
                        onChange={(e) => setStartPlace(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="endPlace">
                    <Form.Label>Место назначения</Form.Label>
                    <Form.Control
                        type="text"
                        value={endPlace}
                        onChange={(e) => setEndPlace(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="weight">
                    <Form.Label>Вес</Form.Label>
                    <Form.Control
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="length">
                    <Form.Label>Длина</Form.Label>
                    <Form.Control
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="width">
                    <Form.Label>Ширина</Form.Label>
                    <Form.Control
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" className='mt-2' type="submit">
                    Создать посылку
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePackagePage;