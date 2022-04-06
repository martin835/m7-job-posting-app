import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import JobPost from "./JobPost";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobSearch({ data, setSearchQuery, fetchSearchData, searchQuery }) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs/categories`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setCategoryData(data);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={3} className="order-2">
            <ListGroup>
              {categoryData.map((category) => (
                <ListGroup.Item>
                  <Link to={`/category/${category}`}>{category}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={9} className="order-1">
            <Container className="mb-4">
              <Row>
                <Col md={12}>
                  <Form.Control
                    size="lg"
                    className="w-50"
                    type="text"
                    placeholder="Search jobs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={(e) => fetchSearchData(e)}
                  />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col md={12}>
                  {data.map((jobPost, i) => (
                    <JobPost jobPost={jobPost} key={jobPost._id} />
                  ))}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobSearch;
