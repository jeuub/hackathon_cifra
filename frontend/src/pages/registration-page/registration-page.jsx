import React from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const RegistrationPage = (props) => {
  return (
    <Container>
        <Row>
            <Col xs={10} sm={5} className="mx-auto">
                <h1 className="mx-auto">Регистрация</h1>
                <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control type="email" placeholder="Например, name@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Например, Иванов" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Например, Иван" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Город</Form.Label>
                        <Form.Control type="text" placeholder="Например, Москва" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Ваш пароль" required />
                        <Form.Text className="text-muted">
                            Пароль должен содержать минимум 8 символов.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
                <LinkContainer to="/auth">
                    <Button variant="secondary">
                        У меня уже есть аккаунт
                    </Button>
                </LinkContainer>
            </Col>
        </Row>
    </Container>
  );    
};

export default RegistrationPage;