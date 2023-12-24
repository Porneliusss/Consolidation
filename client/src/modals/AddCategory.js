import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { createCategory } from "../http/categoryApi";

const AddCategory = ({ show = false, hide }) => {
    const [name, setName] = useState("");

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить категорию
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control className="mb-2" type="text" value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="ms-2" variant="danger" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={() => {
                        createCategory({name: name}).then(hide)
                    }}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCategory;