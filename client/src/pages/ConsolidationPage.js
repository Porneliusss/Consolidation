import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateConsolidationModel from "../modals/CreateConsolidationModel";
import { connectCarPack, delPackage, getAllCars, getAllConsolidation, getInitPacks, getPacksData } from "../http/consolidationApi";
import StatusModel from "../modals/ConsolidationSetStatus";
import { ADMIN_ROUTE, WAYBILL_ROUTER } from "../utils/consts";
import CreateCar from "../modals/CreateCarModel";
import CelectCarModel from "../modals/CelectCarModel";
import UpdCar from "../modals/UpdCar";

const ConsolidationPage = () => {
    const navigate = useNavigate()
    const [consalidationModel, setConsalidationModel] = useState(false)
    const [selectId, setSelectId] = useState(0)
    const [consolidationData, setConsolidationData] = useState([])
    const [packsData, setPacksData] = useState([])
    const [selectCar, setSelectCar] = useState(false)
    const [isLogin, setIsLogin] = useState(true)

    const [selectCarId, setSelectCarId] = useState(null)
    const [cars, setCars] = useState([])
    const [updCar, setUpdCar] = useState(false)


    useEffect(() => {
        getAllConsolidation().then((data) => setConsolidationData(data))
            .then(setIsLogin(false))

        getInitPacks().then((data) => setPacksData(data))

        getAllCars().then((data) => setCars(data))
    }, []);

    return (
        <Container style={{ minHeight: "100vh" }}>
            {isLogin ?
                <Spinner></Spinner>
                :
                <Container className="mt-2">
                    <Row className="mt-2">
                        <Col md={5}>
                            <Button onClick={() => setConsalidationModel(true)}>
                                Добавить машину
                            </Button>
                            <Button className="ms-2" onClick={() => navigate(ADMIN_ROUTE)}>
                                Назад
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h4 className="text-white">Машины</h4>
                            {selectCarId !== null ?
                                <div className="d-flex">
                                    <p className="text-white">Выбрана машина: {selectCarId}</p>
                                    <Button
                                        onClick={() => setSelectCarId(null)}
                                        variant="outline-danger"
                                        className="ms-2 mb-2">
                                        Отмена
                                    </Button>
                                </div>
                                :
                                <></>
                            }
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Начальная точка</th>
                                        <th>Конечная точка</th>
                                        <th>Объем багажника</th>
                                        <th>№</th>
                                        <th>Листы</th>
                                        <th>Добавить</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cars.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.startPlace}</td>
                                            <td>{item.endPlace}</td>
                                            <td>{item.trunkVolume}</td>
                                            <td>{item.number}</td>
                                            <td>
                                                <Button onClick={() => navigate(WAYBILL_ROUTER + '/' + item.id)}>
                                                   Путь 
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    onClick={() => setSelectCarId(item.id)}
                                                >Добавить</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6}>
                            <h4 className="text-white">Посылки</h4>
                            {packsData.map((pack) => (
                                <Table key={pack.id} striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Стартовое место</th>
                                            <th>Конечное место</th>
                                            <th>Вес</th>
                                            <th>Длина</th>
                                            <th>Ширина</th>
                                            <th>Дата создания</th>
                                            <th>Удалить</th>
                                            {selectCarId !== null ? <th></th> : <></>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{pack.id}</td>
                                            <td>{pack.startPlace}</td>
                                            <td>{pack.endPlace}</td>
                                            <td>{pack.weight}</td>
                                            <td>{pack.length}</td>
                                            <td>{pack.width}</td>
                                            <td>{pack.createdAt.split('T')[0]}</td>
                                            <td>
                                                <Button
                                                    variant="outline-danger"
                                                    onClick={() => {
                                                        delPackage(pack.id).then(() =>
                                                            window.location.reload())
                                                    }}
                                                >X</Button>
                                            </td>
                                            {selectCarId !== null ?
                                                <td>
                                                    <Button
                                                        onClick={() =>
                                                            connectCarPack(
                                                                { carId: selectCarId, packId: pack.id }
                                                            ).then(() => window.location.reload())
                                                        }
                                                        variant="outline-success">+</Button>
                                                </td>
                                                :
                                                <></>}
                                        </tr>
                                    </tbody>
                                </Table>
                            ))}
                        </Col>
                    </Row>
                </Container>
            }
            <CreateCar show={consalidationModel} hide={() => setConsalidationModel(false)} />
            <CelectCarModel packId={selectId} show={selectCar} hide={() => setSelectCar(false)} />
            <UpdCar show={updCar} hide={() => setUpdCar(false)} />
        </Container>
    )
}

export default ConsolidationPage