import React from "react";
import { Button, Row, Container} from "react-bootstrap";
import { useState, useEffect } from "react";
import {connect} from "react-redux";
import {useDispatch, useSelector} from 'react-redux'

import InitiativeCard from "../../components/initiative-card/initiative-card"
import { fetchInitiativesList } from "../../store/actions/api-actions";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const initiatives = (props) => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.DATA.initiatives)

  const { fetchInitiative, initiatives } = props;

  useEffect(() => {
    fetchInitiative();
  }, []);

  const { height, width } = useWindowDimensions();
  return (
    <Container>
      <h1 className="text-center">Инициативы</h1>
      <Row xs={1} md={3}>
      {cash.map(initiative => {
        return (
            <InitiativeCard initiatives={initiative} key={initiative.id} />
            )
          })}
          </Row>
      <Row>
        <Button style={{ width: 150, margin: "20px auto" }}>
          Загрузить ещё
        </Button>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ DATA }) => ({
  initiatives: DATA.initiatives,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitiative() {
    dispatch(fetchInitiativesList());
  },
});

export {initiatives};
export default connect(mapStateToProps, mapDispatchToProps)(initiatives);

