import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../http/productApi";
import { PRODUCT_ROUTE } from "../utils/consts";
import { createOrder } from "../http/userApi";
import SuccessModel from "../modals/SuccessModel";

const ProductPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [productData, setProductData] = useState()
    const [isLoading, setIsLoading] = useState(true);

    const [quantity, setQuantity] = useState('')
    const [endPlace, setEndPlace] = useState('')

    const [alertModel, setAlertModel] = useState(false)
    const [Ok, setOk] = useState(false)

    const orderFunction = () => {
        if (!quantity || !endPlace) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('name', productData.name);
        formData.append('productId', id);
        formData.append('startDate', new Date().toISOString());
        formData.append('endPlace', endPlace);
        formData.append('quantity', quantity);
        formData.append('price', quantity * productData.price);

        createOrder(formData)
            .then(() => {
                setOk(true);
                setAlertModel(true);
            });
    }

    useEffect(() => {
        getOneProduct(id)
            .then((data) => {
                setProductData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <Container className="text-white" style={{ height: "100vh" }}>
            {isLoading ? (
                <Spinner animation="border" variant="light" />
            ) : (
                <>
                    <Row className="mt-2">
                        <Col>
                            <h4>
                                {productData.name}
                            </h4>
                            <div style={{
                                width: "300px",
                                height: "300px",
                                backgroundImage: `url(${process.env.REACT_APP_API_URL + productData.img})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                            </div>
                            <div className="mt-2">
                                <p>
                                    Категория: {productData.category.name}
                                </p>
                                <p>
                                    Поставщик: {productData.provider.name}
                                </p>
                                <p>
                                    Цена: {productData.price}
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Label>
                                    Оформить заказ
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    type="number"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                    placeholder="Количество"
                                    required
                                />
                                <Form.Control
                                    className="mb-2"
                                    as="textarea"
                                    value={endPlace}
                                    onChange={e => setEndPlace(e.target.value)}
                                    placeholder="Адрес доставки"
                                    required
                                />
                                <Form.Label>
                                    Общая цена: {quantity * productData.price}
                                </Form.Label>
                            </Form>
                            <Button variant="success" onClick={orderFunction}>
                                Оформить
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Button
                                onClick={() => navigate(PRODUCT_ROUTE)}
                            >
                                Назад
                            </Button>
                        </Col>
                    </Row>
                    <SuccessModel hide={() => {
                        setAlertModel(false)
                        navigate(PRODUCT_ROUTE)
                    }} show={alertModel} Ok={Ok} />
                </>
            )}
        </Container>
    )
}

export default ProductPage