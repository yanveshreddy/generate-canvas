import React, { useState, useEffect } from "react";
import "./App.css";
import immg from "./assets/laptop.jpg";
import html2canvas from "html2canvas";

function App() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    // setErrors(validate(values));
    // if (Object.keys(errors).length === 0 && isSubmitting) {
    // }
  }, [values]);

  const handleGenerateClick = () => {};

  function downloadimage() {
    //var container = document.getElementById("image-wrap"); //specific element on page
    var container = document.getElementById("canvas-content"); // full page
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "job-details.jpg";
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
    });
  }
  return (
    <div className="row bg-container">
      <div className="col-12 col-md-6 bg-dark form-part">
        <div className="d-flex flex-column justify-content-center form-part">
          <div className="form-area d-flex flex-column justify-content-center">
            <h1 className="form-heading">Enter Details</h1>
            <input
              type="text"
              className="custom-input"
              placeholder="Job Title"
              name="jobTitle"
              value={values.jobTitle}
              onChange={handleChange}
            />
            <input
              type="text"
              className="custom-input"
              placeholder="Company Name"
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="custom-input"
              placeholder="Location"
              name="location"
              value={values.location}
              onChange={handleChange}
            />
            <textarea
              type="text"
              className="custom-input"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
            ></textarea>
            <button
              onClick={handleGenerateClick}
              className="btn btn-white align-self-center mt-3"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 canvas-part">
        <div className="d-flex flex-column justify-content-center align-items-center canvas-part">
          <div id="canvas-content" className="canvas-card">
            <img src={immg} className="card-image" alt="" />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>{values.jobTitle}</h3>
              <div className="d-flex flex-row">
                <p>{values.location}</p>
                <p>.</p>
                <p>{values.companyName}</p>
              </div>
            </div>
            <hr />
            <div className="p-3">
              <h4>Responsibilities</h4>
              <p>{values.description}</p>
            </div>
          </div>
          <div className="custom-button" onClick={downloadimage}>
            <div className="down-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#f7f7f7"
                className="bi bi-arrow-down-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            </div>

            <p className="cta-text">Download</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
