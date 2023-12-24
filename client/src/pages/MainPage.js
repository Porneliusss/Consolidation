import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import mainImg from "../assets/main1.png"
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, PRODUCT_ROUTE } from "../utils/consts";
import AdviceModel from "../modals/AdviceModel";


function MainPage() {
    const navigate = useNavigate()
    const [adviceModel, setAdviceModel] = useState()

    return (
        <Container >
            <Row>
                <Col xs={5} className="text-white mt-5">
                    <Row>
                        <p style={{ fontSize: "25px" }}>
                            Консолидация <span style={{ color: "#1dc43f" }}>грузов</span>
                        </p>
                    </Row>
                    <p>
                        <span style={{ fontSize: "20px" }}>
                            Импортируем грузы от разных поставщиков в одной декларации
                        </span>
                        <br />
                        <br />
                        Объединим грузы от нескольких иностранных поставщиков в одном месте и привезем в Беларусь
                        по единой таможенной документации. Проконтролируем комплектность оптимизируем сроки и стоимость доставки.
                    </p>
                    <Button className="me-2"
                        onClick={() => {
                            localStorage.getItem('isAuth') ?
                                setAdviceModel(true)
                                :
                                navigate(LOGIN_ROUTE)
                        }}
                    > Получить консультацию </Button>
                    <Button variant="success"
                        onClick={() => {
                            localStorage.getItem('isAuth') ?
                                navigate(PRODUCT_ROUTE)
                                :
                                navigate(LOGIN_ROUTE)
                        }}
                    > Перейти к списку товаров </Button>
                </Col>
                <Col xs={5} className="mt-5">
                    <img style={{ width: "100%", height: "100%" }} className="ms-5" src={mainImg} alt="изображение" />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-white">
                    <h3>
                        Зачем нужна консолидация грузов
                    </h3>
                </Col>
                <Col className="text-white">
                    <p>
                        <span style={{ fontSize: "20px" }}>Не тратить деньги на отдельные декларации для каждого груза</span>
                        <br /><br />
                        Чтобы ввезти грузы от разных поставщиков в Беларусь, нужно подготовить отдельные пакеты таможенных документов на каждую партию — они обходятся в 10-20 тысяч рублей за пакет.
                    </p>
                </Col>
                <Col className="text-white">
                    <p>
                        <span style={{ fontSize: "20px" }}>Получать все грузы одним транспортом</span>
                        <br /><br />
                        Если вы работаете с несколькими зарубежными поставщиками, вам нужно отслеживать все грузы и принимать их в разных местах — это лишнее время и ресурсы на приемку. Консолидация поможет объединить все грузы в единую поставку.
                    </p>
                </Col>
                <Col className="text-white">
                    <p>
                        <span style={{ fontSize: "20px" }}>Комплектовать товары по единым правилам</span>
                        <br /><br />
                        Каждый поставщик упаковывает и комплектует грузы по своим стандартам — это приводит к дополнительным проверкам и сложностям на таможне. Мы укомплектуем разные грузы по единому стандарту, а также учтем все правила маркировки и упаковки товаров.
                    </p>
                </Col>
            </Row>
            <Row className="text-white mt-5">
                <Row>
                    <h2>Как мы работаем</h2>
                </Row>
                <Row>
                    <Col className="ms-3" xs={2}>
                        <h1 style={{ color: "#1dc43f", fontSize: "100px", marginBottom: "20px" }}>01</h1>
                        <h1 style={{ color: "#1dc43f", fontSize: "100px", marginBottom: "20px" }}>02</h1>
                        <h1 style={{ color: "#1dc43f", fontSize: "100px", marginBottom: "20px" }}>03</h1>
                        <h1 style={{ color: "#1dc43f", fontSize: "100px", marginBottom: "20px" }}>04</h1>
                        <h1 style={{ color: "#1dc43f", fontSize: "100px", marginBottom: "20px" }}>05</h1>
                    </Col>
                    <Col className="mt-3">
                        <h4 style={{ marginTop: "50px" }}>Договариваемся с вашими зарубежными поставщиками и уточняем сроки доставки</h4>
                        <h4 style={{ marginTop: "100px" }}>Принимаем грузы на нашем складе, упаковываем и комплектуем единую партию товаров</h4>
                        <h4 style={{ marginTop: "100px" }}>Готовим полный пакет таможенной документации с декларацией, накладными и сопроводительными документами</h4>
                        <h4 style={{ marginTop: "100px" }}>Ввозим груз в Беларусь и проходим растаможку товаров</h4>
                        <h4 style={{ marginTop: "100px" }}>Доставляем товары до вашего российского склада или офиса</h4>
                    </Col>
                </Row>
            </Row>
            <Row className="text-white mt-4" style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                <h3>
                    Если у вас есть вопросы, отправьте заявку и получите консультацию
                </h3>
                <div style={{ width: "20%" }}>
                    <Button
                        onClick={() => {
                            localStorage.getItem('isAuth') ?
                                setAdviceModel(true)
                                :
                                navigate(LOGIN_ROUTE)
                        }}
                    >
                        Получить консультацию
                    </Button>
                </div>
            </Row>
            <Row>
                <div style={{ height: "20%" }}>
                    <br />
                </div>
            </Row>
            <AdviceModel show={adviceModel} hide={() => setAdviceModel(false)} />
        </Container>
    )
}

export default MainPage