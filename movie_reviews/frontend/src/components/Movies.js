import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movie";
import { Link } from "react-router-dom";
import { Card, Container, Image, Col, Row, Button } from "react-bootstrap";

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
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {props.user && (
                  <Link to={"/movies/" + props.match.params.id + "/review"}>
                    Add Review
                  </Link>
                )}
              </Card.Body>
            </Card>
            <h2>Reviews</h2>
            {movie.reviews.map(({ reviews, index }) => {
              return (
                <Card key={index}>
                  <Card.Body>
                    <h5>{reviews.name + " reviewed on " + reviews.date}</h5>
                    <p>{reviews.review}</p>
                    {props.user && props.user.id === reviews.user.id && (
                      <Row>
                        <Col>
                          <Link
                            to={{
                              pathname:
                                "/movies/" + props.match.params.id + "/reviews",
                              state: { currentReview: reviews },
                            }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button variant="link">Delete</Button>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
