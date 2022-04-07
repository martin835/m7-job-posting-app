import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Alert,
  Spinner,
} from "react-bootstrap";
import JobPost from "./JobPost";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSearchedJobsAction } from "../redux/actions";
import { ImHeartBroken } from "react-icons/im";

const mapStateToProps = (state) => ({
  data: state.fetchedJobs.searchedJobs,
  isError: state.fetchedJobs.isError,
  isLoading: state.fetchedJobs.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSearchData: (e, searchQuery) => {
    dispatch(fetchSearchedJobsAction(e, searchQuery));
  },
});

// -----COMPONENT  BEGINNING---------
function JobSearch(props) {
  const [categoryData, setCategoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
              {categoryData.map((category, i) => (
                <ListGroup.Item key={i}>
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
                    onKeyUp={(e) => props.fetchSearchData(e, searchQuery)}
                  />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col md={12}>
                  {props.isError && (
                    <Alert variant="danger">
                      <Alert.Heading>
                        Ups, something is broken <ImHeartBroken />
                      </Alert.Heading>
                    </Alert>
                  )}
                  {props.isLoading ? (
                    <Spinner animation="border" variant="info" />
                  ) : (
                    props.data.map((jobPost) => (
                      <JobPost jobPost={jobPost} key={jobPost._id} />
                    ))
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);
