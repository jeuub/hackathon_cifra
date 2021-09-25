import React from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { AppRoute } from "../../utils/const"

const RegistrationPage = (props) => {
  return (
    <Container>
        <Row style={{ fontSize: '1.5em' }}>
            <Col xs={12} sm={7} className="mx-auto">
                <h1 className="text-center">Регистрация</h1>
                <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Например, name@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Например, Иванов" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Например, Иван" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Город</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Например, Москва" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Ваш пароль" required />
                        <Form.Text className="text-muted">
                            Пароль должен содержать минимум 8 символов.
                        </Form.Text>
                    </Form.Group>
                    <Button className="col-12" size="lg" variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
                <LinkContainer to={ AppRoute.AUTH }>
                    <Button className="col-12 align-self-center" size="lg" variant="secondary">
                        У меня уже есть аккаунт
                    </Button>
                </LinkContainer>
            </Col>
        </Row>
    </Container>
  );
};

export default RegistrationPage;