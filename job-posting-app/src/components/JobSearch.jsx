import { Container, Row, Col, Form } from "react-bootstrap";
import JobPost from "./JobPost";

function JobSearch({ data, setSearchQuery, fetchSearchData, searchQuery }) {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Form.Control
              size="lg"
              className="w-50"
              type="text"
              placeholder="Large text"
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
            {data.map((jobPost) => (
              <JobPost jobPost={jobPost} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobSearch;
