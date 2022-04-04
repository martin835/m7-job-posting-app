import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  FormControl,
  Jumbotron,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import JobPost from "./components/JobPost";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const fetchSearchData = async (e) => {
    if (e.key === "Enter") {
      try {
        let response = await fetch(
          `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`
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
    }
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>
      {/*       <Jumbotron fluid>
        <Container>
          <h1>Job Hunt</h1>
          <p>Search for jobs</p>
        </Container>
      </Jumbotron> */}

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

export default App;
