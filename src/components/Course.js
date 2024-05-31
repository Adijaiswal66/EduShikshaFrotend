import React from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { Slide, toast } from "react-toastify";
function Course({ course, updateCourse }) {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response);
        updateCourse(id);
        toast.success("Course delted successfully", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title text-center">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <div className="container text-center">
            <button
              type="button"
              onClick={(id) => {
                deleteCourse(course.id);
              }}
              className="btn btn-sm btn-danger me-3"
            >
              Delete
            </button>
            <button type="button" className="btn btn-sm btn-warning">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
