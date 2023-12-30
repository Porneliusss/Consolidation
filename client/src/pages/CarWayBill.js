import React, { useEffect, useState } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { createWayBill, getCarPackage } from "../http/consolidationApi";
import { MAIN_ROUTE } from "../utils/consts";

function CarWayBill() {
    const { id } = useParams();
    const [carPack, setCarPack] = useState([]);
    const [cars, setCars] = useState([]);
    const [duplError, setDuplError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        getCarPackage(id)
            .then((data) => {
                setCars(data.packageCars)
                setCarPack(data.packages)
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    const handleButtonClick = () => {
        const queueValues = [];
        let dupl = false;

        carPack.forEach((item) => {
            const queue = document.getElementById(`queue-${item.id}`).value;

            if (queueValues.includes(queue)) {
                setDuplError(true);
                dupl = true;
                return;
            }

            queueValues.push(queue);
        });

        if (!dupl) {
            carPack.forEach((item) => {
                const queue = document.getElementById(`queue-${item.id}`).value;
                const date = document.getElementById(`date-${item.id}`).value;

                const wayBill = {
                    date: date,
                    status: "Забрать",
                    packageCarId: document.getElementById(`carPackId-${item.id}`).innerText,
                    number: queue,
                };

                if (!wayBill.date || !wayBill.number || !wayBill.packageCarId || !wayBill.status) {
                    setDuplError(true);
                    console.log(wayBill);
                    return;
                }

                createWayBill(wayBill);

            });
        }
        navigate(MAIN_ROUTE)
    };

    return (
        <Container style={{ minHeight: "100vh" }}>
            {isLoading ? (
                <Spinner animation="border" variant="light" />
            ) : (
                <Row className="mt-2">
                    <Col md={8}>
                        <h4 className="text-white">Посылки для машины</h4>
                        {carPack.map((item) => (
                            <Card key={item.id} className="mb-2">
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <p id={`carPackId-${item.id}`} style={{ display: "none" }}>
                                                {cars.find((car) => car.packageId === item.id)?.id}
                                            </p>
                                            <p>Начальная точка: {item.startPlace}</p>
                                            <p>Конечная точка: {item.endPlace}</p>
                                            <p>Дата создания: {item.createdAt.split('T')[0]}</p>
                                            <p>Габариты: {item.length} X {item.width} X {item.weight}</p>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                className="mt-2"
                                                type="number"
                                                id={`queue-${item.id}`}
                                                placeholder="Очередь"
                                            />
                                            <Form.Control
                                                className="mt-2"
                                                type="date"
                                                id={`date-${item.id}`}
                                                placeholder="Дата"
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        ))}
                    </Col>
                    <Col>
                        <Button onClick={handleButtonClick}>
                            Сформировать путевой лист
                        </Button>
                        {duplError ?
                            <Alert
                                className="mt-2"
                                variant="danger"
                                onClose={() => setDuplError(false)} dismissible>
                                <p>Ошика</p>
                            </Alert>
                            : <></>
                        }
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default CarWayBill;