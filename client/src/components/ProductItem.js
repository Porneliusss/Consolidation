import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ITEM_ROUTE } from "../utils/consts";

const ProductItem = ({ product }) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-3">
            <Card>
                <Card.Img
                    variant="top"
                    src={process.env.REACT_APP_API_URL + product.img}
                    style={{ height: "200px" }}
                />
                <Card.Body>
                    <Card.Text>{product.name}</Card.Text>
                    <Card.Text>Цена: {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => navigate(PRODUCT_ITEM_ROUTE + "/" + product.id)}>Подробнее</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProductItem;