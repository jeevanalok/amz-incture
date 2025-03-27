import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import fetchProducts from "../apis/fetchProducts";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

function Home() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // simulate api fetching to show loader spinner
  useEffect(() => {
    setLoading(true);
    const fetchProductsData = async () => {
      const data = await fetchProducts();
      return data;
    };

    fetchProductsData()
      .then((data) => {
        setProductData(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container
        fluid
        className="homepage d-flex flex-column justify-content-center "
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Banner />

            <Container className="mt-4 position-relative z-index-2">
              <h2 className="mb-4">Featured Products</h2>
              <Row>
                {productData.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default Home;
