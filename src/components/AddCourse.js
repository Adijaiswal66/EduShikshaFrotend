import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { Slide, toast } from "react-toastify";
function AddCourse() {
  useEffect(() => {
    document.title = "Add a course | EduSiksha";
  }, []);

  const [course, setCourse] = useState({});

  const hanldeForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course is added", {
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
    <div className="container" style={{ width: "80%" }}>
      <form onSubmit={hanldeForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Course Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your course title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Course Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Enter your course description"
            style={{ resize: "none" }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          ></textarea>
          <div className="text-center mt-3">
            <button
              type="submit"
              onClick={hanldeForm}
              className="btn btn-sm btn-success me-1"
            >
              Add Course
            </button>
            <button type="reset" className="btn btn-sm btn-warning ms-1">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
