import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <div className="text-start">
            <span className="fs-5">Looking for something?</span>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-5 mb-4">We're sorry.</h1>
          <p className="lead mb-4">
            The Web address you entered is not a functioning page on our site.
          </p>
          <Button
            as={Link}
            to="/"
            variant="secondary"
            size="lg"
            className="text-white"
          >
            Go to Amazon.in's Home Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
