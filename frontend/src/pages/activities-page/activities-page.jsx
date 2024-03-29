import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Container, Card } from "react-bootstrap";
import { AppRoute } from "../../utils/const";
import CardActivity from "../../components/card-activity/card";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const ActivitiesPage = ({ setActivity }) => {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch('http://172.31.3.166:8000/api/event/')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  const src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c1d4aaebc%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c1d4aaebc%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5234375%22%20y%3D%2297.4015625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  return (
    <Container>
      <Row>
        <h2
          style={{
            fontFamily: "Arial",
            fontSize: "20px",
            textAlign: "center",
            marginBlockEnd: 10,
          }}
        >
          Мероприятия
        </h2>
      </Row>
      {data.map((activity) => {
        return (
          <Link
            to={`/activity/${activity.id}`}
            key={activity.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActivity activity={activity} />
          </Link>
        );
      })}

      <Row>
        <Button
          style={{ fontSize: 14, width: 200, margin: "0 auto 20px auto" }}
        >
          Загрузить ещё
        </Button>
      </Row>
    </Container>
  );
};

export default ActivitiesPage;
