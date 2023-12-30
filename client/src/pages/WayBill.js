import React, { useEffect, useState } from "react";
import { Badge, Button, Card, CardBody, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { getAllBills } from "../http/consolidationApi";
import StatusModel from "../modals/ConsolidationSetStatus";

function Waybill() {
    const [bills, setBills] = useState([]);
    const [cars, setCars] = useState([]);
    const [packs, setPacks] = useState([]);
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [statusModel, setStatusModel] = useState(false);

    useEffect(() => {
        getAllBills().then((data) => {
            setCars(data.cars);
            setBills(data.wayBill);
            setPacks(data.packs);
        }).finally(() => setIsLoading(false));
    }, []);

    function getStatusColor(status) {
        switch (status) {
            case 1:
                return 'primary';
            case 2:
                return 'warning';
            case 3:
                return 'success';
            default:
                return 'secondary';
        }
    }

    function getStatusText(status) {
        switch (status) {
            case 1:
                return 'Принят';
            case 2:
                return 'Доставляется';
            case 3:
                return 'Готов';
            default:
                return 'Неизвестный статус';
        }
    }

    return (
        <Container style={{ minHeight: "100vh" }}>
            {isLoading ? (
                <Spinner animation="border" variant="light" />
            ) : (
                <Row className="mt-2">
                    {cars.map((item) => {
                        const filteredBills = bills.filter((bill) => bill.packageCar.carId === item.id);
                        const newPath = filteredBills.map((bill, index) => {
                            const packageId = bill.packageCar.packageId;
                            const place = index === filteredBills.length - 1 ? packs.find((pack) => pack.id === packageId).endPlace : packs.find((pack) => pack.id === packageId).startPlace;
                            return place;
                        }).join(" -> ");

                        return (
                            <Card key={item.id}>
                                <CardBody>
                                    <p>Машина: {item.number} Путь: {newPath}</p>
                                    {bills.map((bill) => {
                                        if (bill.packageCar.carId === item.id) {
                                            return (
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <p>
                                                            <span className="me-2">
                                                                <Badge>
                                                                    {bill.number}.
                                                                </Badge>
                                                                <Badge className="ms-2">
                                                                    { }
                                                                </Badge>
                                                                <Badge className="ms-2"
                                                                    bg={
                                                                        getStatusColor(packs.find(pack =>
                                                                            pack.id === bill.packageCar.packageId).status)
                                                                    }
                                                                >
                                                                    {getStatusText(packs
                                                                        .find(pack => pack.id === bill.packageCar.packageId).status)}
                                                                </Badge>
                                                                {"  "}{bill.date.split('T')[0]}
                                                            </span>
                                                            {packs.find(pack => pack.id === bill.packageCar.packageId).startPlace}
                                                            {" --> "}
                                                            {packs.find(pack => pack.id === bill.packageCar.packageId).endPlace}
                                                        </p>
                                                        <Button onClick={() => {
                                                            setId(
                                                                packs.find(pack => pack.id === bill.packageCar.packageId).id);
                                                            setStatusModel(true);
                                                        }}>
                                                            Изменить статус
                                                        </Button>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            );
                                        }
                                        return null;
                                    })}
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            )}
            <StatusModel id={id} show={statusModel} hide={() => setStatusModel(false)} />
        </Container>
    );
}

export default Waybill;