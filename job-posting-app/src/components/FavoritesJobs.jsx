import { Container, Row, Col } from "react-bootstrap";
import JobPost from "./JobPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

function FavoritesJobs(props) {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Favourites jobs</h2>
          {props.favorites.map((jobPost) => (
            <JobPost jobPost={jobPost} key={jobPost._id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(FavoritesJobs);
