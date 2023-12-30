import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { connectCarPack, getAllCars } from "../http/consolidationApi";

const CelectCarModel = ({ show = false, hide, packId}) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        getAllCars().then((data) => setCars(data))
    }, [])

    return (
        <>
            <Modal show={show} onHide={hide} className="modal-lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Выберите машину
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Начальная точка</th>
                                <th>Конечная точка</th>
                                <th>Объем багажника</th>
                                <th>Статус</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.startPlace}</td>
                                    <td>{item.endPlace}</td>
                                    <td>{item.trunkVolume}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                connectCarPack({carId: item.id, packId: packId})
                                            }}
                                        >Выбрать</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CelectCarModel;