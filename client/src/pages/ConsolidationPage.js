import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateConsolidationModel from "../modals/CreateConsolidationModel";
import { getAllConsolidation } from "../http/consolidationApi";
import StatusModel from "../modals/ConsolidationSetStatus";
import { ADMIN_ROUTE } from "../utils/consts";

const ConsolidationPage = () => {
    const navigate = useNavigate()
    const [consalidationModel, setConsalidationModel] = useState(false)
    const [statusModel, setStatusModel] = useState(false)
    const [selectId, setSelectId] = useState(0)
    const [consolidationData, setConsolidationData] = useState([])
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        getAllConsolidation().then((data) => setConsolidationData(data))
            .then(setIsLogin(false))
    }, []);

    return (
        <Container style={{ height: "100vh" }}>
            {isLogin ?
                <Spinner></Spinner>
                :
                <Container className="mt-2">
                    <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Все поставки
                            </Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Адрес поставки</th>
                                            <th>Дата постаки</th>
                                            <th>Статус</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {consolidationData.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.endPlace}</td>
                                                    <td>{item.startDate.split('T')[0]}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <Button
                                                            onClick={() => {
                                                                setSelectId(item.id)
                                                                setStatusModel(true)
                                                            }}
                                                        >Изменить статус</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row className="mt-2">
                        <Col md={5}>
                            <Button onClick={() => setConsalidationModel(true)}>
                                Создать поставку
                            </Button>
                            <Button className="ms-2" onClick={() => navigate(ADMIN_ROUTE)}>
                               Назад 
                            </Button>
                        </Col>
                    </Row>
                </Container>
            }
            <CreateConsolidationModel show={consalidationModel} hide={() => setConsalidationModel(false)} />
            <StatusModel id={selectId} show={statusModel} hide={() => setStatusModel(false)} />
        </Container>
    )
}

export default ConsolidationPage