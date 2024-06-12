import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Course from "./components/Course/Course";
import AddCourseForm from "./components/Course/AddCourseForm";
import Notes from "./components/Notes/Notes";
import WebRTC from "./components/WebRTC";


function App() {
  // Assuming you have a mechanism to determine the user's role

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/course' element={<Course/>} />
        <Route exact path="/addcourse" element={<AddCourseForm/>} />
        <Route exact path="/notes" element={<Notes/>} />
        <Route exact path="/liveclass" element={<WebRTC/>} />
      </Routes>
    </>
  );
}

export default App;
