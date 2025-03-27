import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import productData from "../utils/productData";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductSearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  const { addToCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    // Get search results from navigation state
    if (location.state) {
      setSearchResults(() => {
        return productData.filter((product) =>
          product.title
            .toLowerCase()
            .includes(location.state.searchTerm.toLowerCase())
        );
      });
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  // Filter logic
  const filteredResults = searchResults.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;

    return matchesCategory && matchesPrice;
  });

  // Derive unique categories
  const categories = [
    "All",
    ...new Set(searchResults.map((product) => product.category)),
  ];

  return (
    <Container className="search-results-page mt-4">
      <h2 className="mb-4">Search Results for "{searchTerm}"</h2>

      <Row>
        {/* Filters Column */}
        <Col md={3}>
          <h4>Filters</h4>

          {/* Category Filter */}
          <div className="mb-3">
            <h5>Category</h5>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-3">
            <h5>Price Range</h5>
            <div className="d-flex">
              <input
                type="number"
                className="form-control me-2"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    min: parseFloat(e.target.value) || 0,
                  }))
                }
              />
              <input
                type="number"
                className="form-control"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    max: parseFloat(e.target.value) || 1000,
                  }))
                }
              />
            </div>
          </div>
        </Col>

        {/* Results Column */}
        <Col md={9}>
          {filteredResults.length > 0 ? (
            <Row xs={1} md={3} className="g-4">
              {filteredResults.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </Row>
          ) : (
            <p>No results found</p>
          )}
        </Col>
      </Row>

      {/* Results Summary */}
      <div className="mt-3">
        <p>
          Showing {filteredResults.length} of {searchResults.length} results
        </p>
      </div>
    </Container>
  );
};

export default ProductSearchResults;
