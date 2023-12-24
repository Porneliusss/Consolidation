import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { createProvider } from "../http/providerApi";

const AddProvider = ({ show = false, hide, Ok }) => {
    const [name, setName] = useState("");

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить постващика
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control className="mb-2" type="text" value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Имя" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="ms-2" variant="danger" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={() => {
                        createProvider({name: name, rating: 5}).then(hide)
                    }}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProvider;