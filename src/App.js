import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AddForms from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AddCourse from "./components/AddCourse";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} exact />
          </Routes>
          <Routes>
            <Route path="/add-course" Component={AddCourse} exact />
          </Routes>
          <Routes>
            <Route path="/view-courses" Component={AllCourses} exact />
          </Routes>
          <Routes>
            <Route path="/about" Component={About} exact />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
