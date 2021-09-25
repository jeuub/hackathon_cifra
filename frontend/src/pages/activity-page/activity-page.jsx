import React, {useEffect} from "react";
import {connect} from "react-redux";
import { Button, Row, Container, Carousel, Col, Form } from "react-bootstrap";
import Comment from "../../components/comment/comment";
import { fetchActivityList } from "../../store/actions/api-actions";
import { loadActivities } from "../../services/action";

const ActivityPage = (props) => {
  // const { fetchActivity, activities } = props;

  useEffect(() => {
    loadActivities();
  }, []);

  const src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  const date = "12.11.2002";
  const place = "Москва ул.Коробкова 13";
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
          Заголовок
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
      <Row md={2} style={{ width: "60%", minWidth: 300, margin: "10px auto" }}>
        <Col style={{ minWidth: 200, margin: "2px auto" }}>
          <span
            style={{
              fontSize: 14,
              color: "gray",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Дата проведения {date}
          </span>
        </Col>
        <Col style={{ minWidth: 200, margin: "2px auto" }}>
          <span
            style={{
              fontSize: 14,
              color: "gray",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Место проведения {place}
          </span>
        </Col>
      </Row>
      <Row
        style={{
          width: "60%",
          minWidth: "300px",
          margin: "0 auto",
          fontSize: 14,
        }}
      >
        <p>{description}</p>
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

const mapStateToProps = ({ DATA }) => ({
  activities: DATA.activities,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivity() {
    dispatch(fetchActivityList());
  },
});

export { ActivityPage };
export default connect(mapStateToProps, mapDispatchToProps)(ActivityPage);
