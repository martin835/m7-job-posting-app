import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiHeartAddLine, RiHeartAddFill } from "react-icons/ri";
import { connect } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../redux/actions";

const mapStateToProps = (state) => ({
  favorites: state.favoriteJobs.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (jobPost) => {
    dispatch(addToFavoritesAction(jobPost));
  },

  removeFromFavorites: (id) => {
    dispatch(removeFromFavoritesAction(id));
  },
});

function JobPost({ jobPost, addToFavorites, favorites, removeFromFavorites }) {
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

          {favorites.map((f) => f._id).includes(jobPost._id) ? (
            <Button
              variant="link"
              className="ml-3"
              onClick={() => removeFromFavorites(jobPost._id)}
            >
              <RiHeartAddFill />
            </Button>
          ) : (
            <Button
              variant="link"
              className="ml-3"
              onClick={() => addToFavorites(jobPost)}
            >
              <RiHeartAddLine />
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPost);
