import React from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { AppRoute } from "../../utils/const"

const AuthPage = (props) => {
  return (
    <Container>
        <Row style={{ fontSize: '1.5em' }}>
            <Col xs={12} sm={7} className="mx-auto">
                <h1 className="text-center">Вход</h1>
                <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Например, name@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Ваш пароль" required/>
                        <Button variant="link">
                            Забыли пароль?
                        </Button>
                    </Form.Group>
                    <Button className="col-12 mb-3" size="lg" variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
                <LinkContainer to={ AppRoute.REGISTRATION }>
                    <Button className="col-12 align-self-center" size="lg" variant="secondary">
                        Создать аккаунт
                    </Button>
                </LinkContainer>
            </Col>
        </Row>
    </Container>
  );
};

export default AuthPage;