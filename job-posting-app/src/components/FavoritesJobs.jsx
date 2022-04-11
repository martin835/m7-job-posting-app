import { Container, Row, Col } from "react-bootstrap";
import JobPost from "./JobPost";
//import { connect } from "react-redux";
import { useSelector } from "react-redux";

// const mapStateToProps = (state) => ({
//   favorites: state.favoriteJobs.favorites,
// });

function FavoritesJobs(props) {
  const favorites = useSelector((state) => state.favoriteJobs.favorites);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Favourites jobs</h2>
          {favorites.map((jobPost) => (
            <JobPost jobPost={jobPost} key={jobPost._id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default FavoritesJobs;
//export default connect(mapStateToProps)(FavoritesJobs);
