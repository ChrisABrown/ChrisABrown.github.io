import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movie";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Image,
  Col,
  Row,
  Button,
  Media,
} from "react-bootstrap";

export const Movie = (props) => {
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: [],
  });
  const getMovie = (id) => {
    MovieDataService.get(id)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setMovie(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={movie.poster + "/100px250"} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};
