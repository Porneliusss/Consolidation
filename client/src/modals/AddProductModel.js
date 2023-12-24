import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap';
import { getAllCategory } from "../http/categoryApi";
import { getAllProvider } from "../http/providerApi";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import { createProduct } from "../http/productApi";

const AddProductModel = ({ show = false, hide }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("")
    const [category, setCategory] = useState([])
    const [providerId, setProviderId] = useState("")
    const [providers, setProviders] = useState([])
    const [file, setFile] = useState("")
    const [error, setError] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        getAllCategory().then((data) => setCategory(data))
        getAllProvider().then((data) => setProviders(data))
    }, []);

    const handleSubmit = () => {
        if (!name || !categoryId || !file || !price) {
            setError("Заполните все поля");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("categoryId", categoryId);
        formData.append("providerId", providerId);
        formData.append("img", file);

        createProduct(formData)
            .then((data) => {
                navigate(MAIN_ROUTE)
            })
            .catch((error) => {
                console.error("Error creating product:", error);
            });
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить продукт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Название</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Select
                            style={{ cursor: "pointer" }}
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option disabled value="">
                                Выберите категорию
                            </option>
                            {category.map((e) => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Select
                            className="mt-3"
                            style={{ cursor: "pointer" }}
                            value={providerId}
                            onChange={(e) => setProviderId(e.target.value)}
                        >
                            <option disabled value="">
                                Выберите поставщика 
                            </option>
                            {providers.map((e) => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Group className="mt-3" controlId="">
                            <Form.Label>Добавить фото</Form.Label>
                            <Form.Control
                                required
                                type="file"
                                onChange={selectFile}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="price">
                            <Form.Label>Цена</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    {error && <p className="text-danger">{error}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Отмена
                    </Button>
                    <Button className="mt-2" onClick={handleSubmit}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProductModel;
