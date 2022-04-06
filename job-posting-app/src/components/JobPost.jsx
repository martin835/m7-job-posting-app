import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiHeartAddLine } from "react-icons/ri";
import { connect } from "react-redux";
import { addToFavorites } from "../redux/actions";

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (jobPost) => {
    dispatch(addToFavorites(jobPost));
  },
});

function JobPost({ jobPost, addToFavorites }) {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{jobPost.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {jobPost.company_name}
          </Card.Subtitle>
          <Card.Text>
            {/*  Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </Card.Text>
          <Link to={`/company/${jobPost.company_name}`}>
            See all jobs from {jobPost.company_name}{" "}
          </Link>

          <Button
            variant="link"
            className="ml-3"
            onClick={() => addToFavorites(jobPost)}
          >
            <RiHeartAddLine />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPost);
