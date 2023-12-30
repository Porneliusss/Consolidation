import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { getAllAdvice } from "../http/userApi";
import GamilMail from "../components/DelAdvice";
import AddProductModel from "../modals/AddProductModel";
import { useNavigate } from "react-router-dom";
import { CONSOLIDATION_ROUTER, WAYBILL_PAGE_ROUTER } from "../utils/consts";
import AddProvider from "../modals/AddProvider";
import AddCategory from "../modals/AddCategory";

const AdminPage = () => {
    const navigate = useNavigate()
    const [advice, setAdvice] = useState([])
    const [idDel, setIdDel] = useState([])
    const [isLogin, setIsLogin] = useState(true)
    const [mailModal, setMailModal] = useState(false)
    const [productModel, setProductModel] = useState(false)
    const [providerModel, setProviderModel] = useState(false)
    const [categoryModel, setCategoryModel] = useState(false)

    useEffect(() => {
        getAllAdvice()
            .then((response) => setAdvice(response.data))
            .finally(() => setIsLogin(false));
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
                                Все обращения к консультации
                            </Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Имя</th>
                                            <th>Фамилия</th>
                                            <th>Почта</th>
                                            <th>Сообщение</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {advice.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.sureName}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.body}</td>
                                                    <td className="d-flex">
                                                        <a className="btn btn-primary me-2"
                                                            href={`mailto:${item.email}`}
                                                        >
                                                            Ответить
                                                        </a>
                                                        <Button
                                                            variant="danger"
                                                            onClick={() => {
                                                                setIdDel(item.id)
                                                                setMailModal(true)
                                                            }}
                                                        >
                                                            Удалить
                                                        </Button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row className="mt-2">
                        <Col>
                            <Button
                                className="ms-2"
                                onClick={() => navigate(CONSOLIDATION_ROUTER)}
                            >
                                Конслидация поставок
                            </Button>
                            <Button
                                className="ms-2"
                                onClick={() => navigate(WAYBILL_PAGE_ROUTER)}
                            >
                                Путевые листы
                            </Button>
                        </Col>
                    </Row>
                </Container>
            }
            <GamilMail show={mailModal} hide={() => setMailModal(false)} id={idDel} />
            <AddProductModel show={productModel} hide={() => setProductModel(false)} />
            <AddProvider show={providerModel} hide={() => setProviderModel(false)} /> 
            <AddCategory show={categoryModel} hide={() => setCategoryModel(false)} />
        </Container>
    )
}

export default observer(AdminPage)