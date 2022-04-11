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
import { useSelector, useDispatch } from "react-redux";

// const mapStateToProps = (state) => ({
//   data: state.fetchedJobs.searchedJobs,
//   isError: state.fetchedJobs.isError,
//   isLoading: state.fetchedJobs.isLoading,
// });
// const mapDispatchToProps = (dispatch) => ({
//   fetchSearchData: (searchQuery) => {
//     //if (e.key !== "Enter") return;
//     dispatch(fetchSearchedJobsAction(searchQuery));
//   },
// });

// -----COMPONENT  BEGINNING---------
function JobSearch(props) {
  const [categoryData, setCategoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  //START OF Hooks replacing connect function and mapStateToPros / mapDispatchToPros
  const data = useSelector((state) => state.fetchedJobs.searchedJobs);
  const isError = useSelector((state) => state.fetchedJobs.isError);
  const isLoading = useSelector((state) => state.fetchedJobs.isLoading);
  const dispatch = useDispatch();
  //END OF Hooks replacing connect function and mapStateToPros / mapDispatchToPros
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
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch(fetchSearchedJobsAction(searchQuery));
                    }}
                  >
                    <Form.Control
                      size="lg"
                      className="w-50"
                      type="text"
                      placeholder="Search jobs"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Form>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col md={12}>
                  {isError && (
                    <Alert variant="danger">
                      <Alert.Heading>
                        Ups, something is broken <ImHeartBroken />
                      </Alert.Heading>
                    </Alert>
                  )}
                  {isLoading ? (
                    <Spinner animation="border" variant="info" />
                  ) : (
                    data.map((jobPost) => (
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

export default JobSearch;
//Old connect function that is replaced by hooks:
//export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);
