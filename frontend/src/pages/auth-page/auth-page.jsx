import React from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const AuthPage = (props) => {
  return (
    <Container>
        <Row>
            <Col xs={10} sm={5} className="mx-auto">
                <h1 className="mx-auto">Вход</h1>
                <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control type="email" placeholder="Например, name@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Ваш пароль" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
                <LinkContainer to="/registration">
                    <Button variant="secondary">
                        Создать аккаунт
                    </Button>
                </LinkContainer>
            </Col>
        </Row>
    </Container>
  );
};

export default AuthPage;