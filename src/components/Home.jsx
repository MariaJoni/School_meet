import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [mentor, setMentor] = useState("");
  const [duration, setDuration] = useState("");

  // const handlechange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formvalues, [name]: value });
  // };

  const navigate = useNavigate();

  const { state } = useLocation();
  console.log("getdata", state);

  useEffect(() => {
    if (state) {
      setName(state.name);
      setMentor(state.mentor);
      setDuration(state.duration);
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courses = JSON.parse(localStorage.getItem("courses")) || [];

    if (state) {
      courses.forEach((newData) => {
        if (state.id === newData.id) {
          newData.name = name;
          newData.mentor = mentor;
          newData.duration = duration;
        }
      });
      localStorage.setItem("courses", JSON.stringify(courses));
    } else {
      const date = new Date();
      const id = date.getTime();
      const course = { id, name, mentor, duration };
      courses.push(course);
      localStorage.setItem("courses", JSON.stringify(courses));
    }
    setDuration("");
    setMentor("");
    setName("");
    navigate("/Showpage");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="meet-app">
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center bg-image"
          style={{
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
          }}
        >
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5">
            <MDBCardBody className="px-5">
              {state ? (
                <h2 className="text-uppercase text-center mb-5">
                  Update ClassRoom
                </h2>
              ) : (
                <h2 className="text-uppercase text-center mb-5">
                  Add ClassRoom
                </h2>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label="Course Name"
                size="lg"
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Mentor Name"
                size="lg"
                type="text"
                name="mentor"
                value={mentor}
                required
                onChange={(e) => setMentor(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Duration"
                size="lg"
                id="form3"
                type="number"
                name="duration"
                value={duration}
                required
                onChange={(e) => setDuration(Number(e.target.value))}
              />
              <MDBBtn
                className="mb-4 w-100 gradient-custom-4"
                size="lg"
                color="black"
              >
                {state ? "UPDATE" : "ADD"}
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
}

export default Home;
