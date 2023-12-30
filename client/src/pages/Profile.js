import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, ListGroup, ListGroupItem, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPackageByUid, getUserData } from "../http/userApi";
import ConsolidationModel from "../modals/ConsolidationModel";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [consolidationModel, setConsolidationModel] = useState(false);
    const [selectId, setSelectId] = useState()

    const [packsData, setPackData] = useState([])

    useEffect(() => {
        getUserData(id)
            .then((response) => {
                setUserData(response.data);
            }).then(() => {
                getPackageByUid(id)
                    .then((response) => {
                        setPackData(response.data);
                    })
            }).finally(() => setIsLoading(false))
    }, [id]);

    return (
        <div style={{ minHeight: "100vh" }}>
            <Container className="text-white">
                {isLoading ? (
                    <Spinner animation="border" variant="light" />
                ) : (
                    <>
                        <Row className="mt-2">
                            <Col md={4}>
                                <h5>Информация о пользователе</h5>
                                <ListGroup>
                                    <ListGroupItem>
                                        Id: {userData.id}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Почта: {userData.email}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Роль: {userData.role}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Дата регистрации: {userData.createdAt.split('T')[0]}
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col md={4}>
                                <h5>Посылки пользователя</h5>
                                {packsData.map((item) => {
                                    return (
                                        <ListGroup key={item.id} as="ol" className="mt-2">
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="ms-2 me-auto">
                                                    <div>Откуда: {item.startPlace}</div>
                                                    <div>Куда: {item.endPlace}</div>
                                                    <div>Вес: {item.weight}</div>
                                                    <div>Длинна: {item.length}</div>
                                                    <div>Ширина: {item.width}</div>
                                                    <div>
                                                        Статус:
                                                        {item.status === 0 ? ' В обработке' :
                                                            item.status === 1 ? ' Доставляется' :
                                                                item.status === 2 ? ' Доставлен' : 'none'
                                                        }
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>

                                    )
                                })
                                }
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
            <ConsolidationModel id={selectId} hide={() => setConsolidationModel(false)} show={consolidationModel} />
        </div>
    )
}

export default Profile