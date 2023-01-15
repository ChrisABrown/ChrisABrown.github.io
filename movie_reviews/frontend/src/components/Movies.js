import React, { useState, useEffect } from "react";
import moment from "moment";
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

  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id]);

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

  const deleteReview = (reviewId, index) => {
    MovieDataService.deleteReview(reviewId, props.user.id)
      .then((response) => {
        setMovie((currState) => {
          currState.reviews.splice(index, 1);
          return {
            ...currState,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
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
            <br></br>
            <h2>Reviews</h2>
            <br></br>
            {console.log(movie.reviews)}
            {movie.reviews.map((review, index) => {
              return (
                <Card key={index}>
                  <Card.Body>
                    <h5>
                      {review.name + " reviewed on "}
                      {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p>{review.review}</p>
                    {props.user && props.user.id === review.user_id && (
                      <Row>
                        <Col>
                          <Link
                            to={{
                              pathname:
                                "/movies/" + props.match.params.id + "/review",
                              state: { currentReview: review },
                            }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button
                            variant="link"
                            onClick={() => {
                              deleteReview(review._id, index);
                            }}
                          >
                            Delete
                          </Button>
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
    </div>
  );
};
