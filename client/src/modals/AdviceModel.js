import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap';
import { addAdvice } from "../http/userApi";

const AdviceModel = ({ show = false, hide }) => {
    const [name, setName] = useState("");
    const [sureName, setSureName] = useState("");
    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");

    const addAdviceFunction = () => {
        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('name', name);
        formData.append('body', body);
        formData.append('email', email);
        formData.append('sureName', sureName);
        addAdvice(formData).then(() => hide());
    }

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Отправить сообщение о консультации</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control className="mb-2"  type="text" value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Имя" />
                        <Form.Control className="mb-2"  type="text" value={sureName}
                            onChange={e => setSureName(e.target.value)}
                            placeholder="Фамилия" />
                        <Form.Control className="mb-2"  type="email" value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Почта" />
                        <Form.Control className="mb-2"  value={body}
                            as="textarea"
                            onChange={e => setBody(e.target.value)}
                            placeholder="Сообщение" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={addAdviceFunction}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdviceModel;