import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Jumbotron } from "react-bootstrap";
import JobSearch from "./components/JobSearch";
import CompanyJobs from "./components/CompanyJobs";
import CategoryJobs from "./components/CategoryJobs";
import FavoritesJobs from "./components/FavoritesJobs";

function App() {
  return (
    <BrowserRouter>
      <Jumbotron fluid>
        <Container>
          <h1>Job Hunt</h1>
          <Link to="/">
            <p>Home</p>
          </Link>

          <Link to="/favorites">
            <p>See favorites</p>
          </Link>
        </Container>
      </Jumbotron>

      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/company/:company_name" element={<CompanyJobs />} />
        <Route path="/category/:category" element={<CategoryJobs />} />
        <Route path="/favorites" element={<FavoritesJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
