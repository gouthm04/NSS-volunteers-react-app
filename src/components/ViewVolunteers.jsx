import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3000/view-vol")
      .then((response) => {
        setVolunteers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container-fluid px-4 mt-4">
        <div className="row">
          <div className="col-12">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Volunteer ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Camp Name</th>
                  <th>Hours</th>
                  <th>Unit Number</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((vol, index) => (
                  <tr key={vol._id}>
                    <td>{index + 1}</td>
                    <td>{vol.volunteerId}</td>
                    <td>{vol.fullName}</td>
                    <td>{vol.email}</td>
                    <td>{vol.phone}</td>
                    <td>{vol.dateOfBirth}</td>
                    <td>{vol.gender}</td>
                    <td>{vol.bloodGroup}</td>
                    <td>{vol.department}</td>
                    <td>{vol.yearOfStudy}</td>
                    <td>{vol.campName}</td>
                    <td>{vol.hoursCompleted}</td>
                    <td>{vol.unitNumber}</td>
                    <td>{vol.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVolunteers;
