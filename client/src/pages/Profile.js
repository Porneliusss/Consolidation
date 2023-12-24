import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, ListGroup, ListGroupItem, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUserData } from "../http/userApi";
import ConsolidationModel from "../modals/ConsolidationModel";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [consolidationModel, setConsolidationModel] = useState(false);
    const [selectId, setSelectId] = useState()

    useEffect(() => {
        getUserData(id)
            .then((response) => {
                setUserData(response.data);
                setIsLoading(false);
            })
    }, [id]);

    return (
        <div style={{minHeight: "100vh"}}>
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
                                <h5>Заказы пользователя</h5>
                                {userData.orders.map((item) => {
                                    return (
                                        <ListGroup key={item.id} as="ol" className="mt-2">
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="ms-2 me-auto">
                                                    <div>Название: {item.name}</div>
                                                    <div>Количество: {item.quantity}</div>
                                                    <div>Общая цена: {item.price}</div>
                                                    <div>Дата заказа: {item.startDate.split('T')[0]}</div>
                                                    <div>Место доставки: {item.endPlace}</div>
                                                    <div>Поставщик: {item.product.provider.name}</div>
                                                    {item.supply ?

                                                        <Button onClick={() => {
                                                            setSelectId(item.id)
                                                            setConsolidationModel(true)
                                                        }} className="mt-2">
                                                            Подробнее
                                                        </Button>
                                                        :
                                                        <Button disabled variant="outlined-secondary" className="mt-2">
                                                            Поставка в обработке
                                                        </Button>
                                                    }
                                                </div>
                                                <Image
                                                    src={process.env.REACT_APP_API_URL + item.product.img} alt="item image"
                                                    style={{ width: '40%', height: '100%' }}
                                                />
                                            </ListGroup.Item>
                                        </ListGroup>
                                    )
                                })}
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