import React from "react";
import { Button, Row, Container, Carousel, Col, Form, ProgressBar } from "react-bootstrap";
import Comment from "../../components/comment/comment";
import {useDispatch, useSelector} from 'react-redux'


const InitiativePage = (props) => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.DATA.initiatives)

  let id = window.location.pathname.split('/')[2]

  const initiative = cash[id]

  const src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, a ut! Ipsum explicabo assumenda repellat esse, vitae accusamus neque hic aut. Eum dolorum corporis placeat, natus officiis dolorem at dignissimos?";
  return (
    <Container>
      <Row>
        <h2
          style={{
            fontFamily: "Arial",
            fontSize: "20px",
            textAlign: "center",
            marginBlockEnd: 10,
            paddingTop: 20,
          }}
        >
          {initiative.title}
        </h2>
      </Row>
      <Row style={{ width: "60%", minWidth: 300, margin: "10px auto" }}>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={src} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={src} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={src} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="d-flex justify-content-center">
        60 людей подписали, следующая цель: 100. всего необходимо: 100
      </Row>
      <Row className="m-auto mt-2 mb-2" style={{ width: "60%", minWidth: 300, margin: "10px auto" }}>
        <ProgressBar now={60} variant="danger" style={{boxSizing: "border-box", padding: 0, height: 5}}/>
      </Row>
      <Row
        style={{
          width: "60%",
          minWidth: "300px",
          margin: "0 auto",
          fontSize: 14,
        }}
      >
        <p>{initiative.description}</p>
      </Row>
      <Row>
          <Button className="col-md-4 col-8 col-sm-6" style={{ margin: "20px auto", fontSize: 14 }}>
            Поддержать инициативу
          </Button>
        </Row>
      <Row>
        <h3
          style={{
            fontFamily: "Arial",
            fontSize: "18px",
            textAlign: "center",
            marginBlockEnd: 10,
            paddingTop: 10,
          }}
        >
          Комментарии
        </h3>
      </Row>
      <Comment avatar={src} />
      <Row>
        <h3
          style={{
            fontFamily: "Arial",
            fontSize: "18px",
            textAlign: "center",
            marginBlockEnd: 10,
            paddingTop: 10,
          }}
        >
          Оставьте комментарий
        </h3>
      </Row>
      <Form
        style={{
          width: "60%",
          minWidth: "300px",
          margin: "0 auto",
          fontSize: 14,
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Комментарий</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Row>
          <Button style={{ width: 150, margin: "20px auto", fontSize: 14 }}>
            Добавить
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default InitiativePage;
