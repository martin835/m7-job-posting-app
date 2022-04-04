import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function JobPost({ jobPost }) {
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

          <Link to={`/${jobPost.company_name}`}>
            See all jobs from {jobPost.company_name}{" "}
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default JobPost;
