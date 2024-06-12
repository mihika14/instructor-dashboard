import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Course.css";
import Modal from "./CourseModal";
import { Link } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sample test data
    const testCourses = [
      { id: 1, name: "Course 1", description: "Description of Course 1" },
      { id: 2, name: "Course 2", description: "Description of Course 2" },
      { id: 3, name: "Course 3", description: "Description of Course 3" },
    ];

    // Simulating a network request
    setTimeout(() => {
      setCourses(testCourses);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemoveCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleViewDescription = (id) => {
    const course = courses.find((course) => course.id === id);
    setSelectedCourse(course);
    setModalOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="courses-container">
        <h2>Courses</h2>
        <table className="courses-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>
                  <button
                    className="view-description-btn"
                    onClick={() => handleViewDescription(course.id)}
                  >
                    View Description
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveCourse(course.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalOpen && (
          <Modal
            course={selectedCourse}
            closeModal={() => setModalOpen(false)}
          />
        )}
      </div>
      <Link to="/addcourse">
        <div className="addcourse-btn">
          <box-icon
            name="plus-circle"
            color="white"
            type="solid"
            size="50px"
            animation="tada"
          ></box-icon>
          <br />{" "}
          <div className="add" style={{ marginRight: "15px", color: "white" }}>
            Add Course
          </div>
        </div>
      </Link>
      <div>
        {/* <input
          type="text"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          placeholder="Course Name"
        />
        <input
          type="text"
          value={newCourseDescription}
          onChange={(e) => setNewCourseDescription(e.target.value)}
          placeholder="Course Description"
        /> */}
        {/* <button onClick={handleAddCourse}>Add Course</button> */}
      </div>
    </>
  );
};

export default Course;
