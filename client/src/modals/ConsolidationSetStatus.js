import React, { useState } from "react";
import { FormSelect, Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { changeStatus } from "../http/consolidationApi";

const StatusModel = ({ show = false, hide, id }) => {
    const [status, setStatus] = useState("")

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Установить статус поставки
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormSelect
                        style={{ cursor: "pointer" }}
                        value={status}
                        required
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option disabled value="">
                            Выберите статус 
                        </option>
                        <option value="Сформирована">
                            Сформирована
                        </option>
                        <option value="Доставляется">
                            Доаствляется
                        </option>
                        <option value="Готово">
                            Готово
                        </option>
                    </FormSelect>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="success" onClick={() => {
                        changeStatus(id, {status: status}).then(hide)
                    }}>
                        Готово
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StatusModel;