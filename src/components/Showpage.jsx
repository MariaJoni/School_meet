import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Showpage.css";

function Showpage() {
  const courseDetails = JSON.parse(localStorage.getItem("courses"));
  console.log("user", courseDetails);

  const [courses, setCourses] = useState(courseDetails);
  // const [edit, setEdit] = useState(false);

  const handleDelete = (id) => {
    const courses = JSON.parse(localStorage.getItem("courses"));
    const filtered = courses.filter((item) => {
      // console.log("item => ", item.id, "\n id =>", id);
      return item.id !== id;
    });

    localStorage.setItem("courses", JSON.stringify(filtered));
    setCourses(filtered);
  };

  const navigate = useNavigate();
  const handleUpdate = (course) => {
    navigate("/", {
      state: {
        id: course.id,
        name: course.name,
        mentor: course.mentor,
        duration: course.duration,
      },
    });
  };

  return (
    <div className="show-card">
      <div className="card-container" style={{ display: "flex" }}>
        <table className="table-container">
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Name</th>
              <th scope="col">Mentor Name</th>
              <th scope="col">Duration Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course}>
                {/* <th scope="row">{course.id}</th> */}
                <td>{course.name}</td>
                <td>{course.mentor}</td>
                <td>{course.duration} </td>
                <td>
                  <div>
                    <button
                      className="btn"
                      onClick={() => handleUpdate(course)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(course.id)}
                    >
                      delete
                    </button>
                  </div>
                </td>
                <hr />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showpage;
