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
import JobSearch from "./components/JobSearch";
import CompanyJobs from "./components/CompanyJobs";
import CategoryJobs from "./components/CategoryJobs";
import FavoritesJobs from "./components/FavoritesJobs";

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
    <BrowserRouter>
      <Jumbotron fluid>
        <Container>
          <h1>Job Hunt</h1>
          <p>Search for jobs</p>
          <Link to="/favorites">
            <p>See favorites</p>
          </Link>
        </Container>
      </Jumbotron>

      <Routes>
        <Route
          path="/"
          element={
            <JobSearch
              data={data}
              setSearchQuery={setSearchQuery}
              fetchSearchData={fetchSearchData}
              searchQuery={searchQuery}
            />
          }
        />
        <Route path="/company/:company_name" element={<CompanyJobs />} />
        <Route path="/category/:category" element={<CategoryJobs />} />
        <Route path="/favorites" element={<FavoritesJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
