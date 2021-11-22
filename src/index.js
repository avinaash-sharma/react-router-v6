import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="course" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundle" element={<Bundle />}></Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are here :p</h4>
      <Link className="btn btn-success" to="/learn/course">
        courses
      </Link>{" "}
      <Link className="btn btn-primary" to="/learn/bundle">
        bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "NodeJS", "Vue", "Angularjs", "Awesome"];
  const randomValue = courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses</h1>
      <h4>Somethings</h4>

      <p>Hey</p>

      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "pink" : "red " };
        }}
        to={`/learn/course/${randomValue}`}
      >
        {randomValue}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/course/tests`}>
        tests
      </NavLink>

      <Outlet />
    </div>
  );
}

function Bundle() {
  return (
    <div>
      <h1>Bundle</h1>
      <h4>Somethings bundle</h4>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL params is: -- {courseid}</h1>
      <button
        className="btn btn-warning"
        onClick={() => {
          navigate("/dashboard", {state: courseid});
        }}
      >
        Price
      </button>
      <Link to="/dashboard" state={"django"}>Test Check</Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>This is Dashboard</h1>
      <h4>Info i got --- {location.state}</h4>
    </div>
  );
}

reportWebVitals();
