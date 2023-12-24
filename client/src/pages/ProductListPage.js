import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Container, Spinner, Row, Form, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { getAllProduct } from "../http/productApi";
import ProductItem from "../components/ProductItem";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    getAllProduct()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <Container className="mt-2" style={{ color: "white", minHeight: '100vh' }}>
      <h4>Наши продукты</h4>
      <Col md={5}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Поиск по имени"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Form.Label className="mt-2 me-2">Сортировака по цене</Form.Label>
          <ToggleButtonGroup type="checkbox" value={sortOrder} onChange={handleSortOrder}>
            <ToggleButton id="tbg-btn-1" value={"desc"} checked={sortOrder === "desc"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg>
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={"asc"} checked={sortOrder === "asc"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
              </svg>
            </ToggleButton>
          </ToggleButtonGroup>
        </Form.Group>
      </Col>
      {isLoading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <Row>
          {sortedProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default observer(ProductListPage);