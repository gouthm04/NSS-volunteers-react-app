import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const AddVolunteer = () => {
  const [input, changeInput] = useState({
    volunteerId: "",
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    department: "",
    yearOfStudy: "",
    campName: "",
    hoursCompleted: "",
    address: "",
    unitNumber: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    console.log(input);

    axios
      .post("http://127.0.0.1:3000/add-vol", input)
      .then((response) => {
        alert("Volunteer Added Successfully");
        changeInput({
          volunteerId: "",
          fullName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          gender: "",
          bloodGroup: "",
          department: "",
          yearOfStudy: "",
          campName: "",
          hoursCompleted: "",
          address: "",
          unitNumber: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header">
            <h3>Add NSS Volunteer</h3>
          </div>

          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Volunteer ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="volunteerId"
                  value={input.volunteerId}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={input.fullName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                  value={input.dateOfBirth}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  name="gender"
                  value={input.gender}
                  onChange={inputHandler}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-select"
                  name="bloodGroup"
                  value={input.bloodGroup}
                  onChange={inputHandler}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  name="department"
                  value={input.department}
                  onChange={inputHandler}
                >
                  <option value="">Select Department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                  <option value="Science">Science</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Year of Study</label>
                <select
                  className="form-select"
                  name="yearOfStudy"
                  value={input.yearOfStudy}
                  onChange={inputHandler}
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Camp Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="campName"
                  value={input.campName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Hours Completed</label>
                <input
                  type="number"
                  className="form-control"
                  name="hoursCompleted"
                  value={input.hoursCompleted}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Unit Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="unitNumber"
                  value={input.unitNumber}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="address"
                  value={input.address}
                  onChange={inputHandler}
                ></textarea>
              </div>

              <div className="col-12 text-center mt-3">
                <button
                  className="btn btn-primary px-5"
                  onClick={submitHandler}
                >
                  Add Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVolunteer;
