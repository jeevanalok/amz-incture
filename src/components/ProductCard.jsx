import React from "react";
import { Link } from "react-router-dom";

import { Card, Button, Col } from "react-bootstrap";

function ProductCard({ product, addToCart }) {
  return (
    <Col md={3} sm={6} className="mb-4 d-flex">
      <Card className="product-card w-100 d-flex flex-column">
        <div
          className="card-image-container"
          style={{
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            className="product-image img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="h5 text-truncate word-wrap">
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </Card.Title>
          <Card.Text className="mb-2">
            <strong>${product.price.toFixed(2)}</strong>
            <span className="rating d-block">
              {"★".repeat(product.rating.rate)}
              {"☆".repeat(5 - product.rating.rate)}
            </span>
          </Card.Text>
          <Button
            variant="primary"
            className="add-to-cart-btn mt-auto"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
