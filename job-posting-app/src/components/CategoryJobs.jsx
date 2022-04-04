import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JobPost from "./JobPost";

function CategoryJobs() {
  const params = useParams();
  console.log(params.category);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCategoryJobPosts();
  }, []);

  const fetchCategoryJobPosts = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?category=${params.category}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setData(data.data);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h4>All jobs in: </h4>
          <h2>{params.category} category</h2>
          {data.map((jobPost) => (
            <JobPost jobPost={jobPost} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryJobs;
