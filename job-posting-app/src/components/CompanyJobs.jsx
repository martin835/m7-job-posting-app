import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JobPost from "./JobPost";

function CompanyJobs() {
  const params = useParams();
  console.log(params.company_name);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCompanyJobPosts();
  }, []);

  const fetchCompanyJobPosts = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${params.company_name}`
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
          <h4>All jobs at: </h4>
          <h2>{params.company_name}</h2>
          {data.map((jobPost) => (
            <JobPost jobPost={jobPost} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyJobs;
