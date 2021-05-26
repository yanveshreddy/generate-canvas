import React, { useState, useEffect } from "react";
import "./App.css";
import immg from "./assets/laptop.jpg";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";

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

  // const handleGenerateClick = () => {};

  function downloadimage() {
    //var container = document.getElementById("image-wrap"); //specific element on page
    // if (window.innerWidth < 1024) {
    //   document
    //     .getElementById("viewport")
    //     .setAttribute("content", "width=1200px");
    // }
    var container = document.getElementById("canvas-content"); // full page
    domtoimage
      .toJpeg(document.getElementById("canvas-content"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "job-details.jpeg";
        link.href = dataUrl;
        link.click();
      });

    // html2canvas(container, { allowTaint: true }).then(function (canvas) {
    //   var link = document.createElement("a");
    //   document.body.appendChild(link);
    //   link.download = "job-details.jpg";
    //   link.href = canvas.toDataURL();
    //   link.target = "_blank";
    //   link.click();
    // });
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

            {/* <div className="form-outline custom-input">
              <input type="text" id="form1" className="form-control " />
              <label className="form-label " for="form1">
                Example label
              </label>
            </div> */}
            {/* <button
              onClick={handleGenerateClick}
              className="btn btn-white align-self-center mt-3"
            >
              Generate
            </button> */}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 canvas-part">
        <div className="d-flex flex-column justify-content-center align-items-center canvas-part">
          <div id="canvas-content" className="canvas-card">
            <img src={immg} className="card-image" alt="" />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-3">
              <h3 className="job-title">{values.jobTitle || "<jobtitle>"}</h3>
              <div className="d-flex flex-row justify-content-center">
                <p className="location">{values.companyName || "<company>"}</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  className="bi bi-dot align-self-center"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
                <p className="location">{values.location || "<location>"}</p>
              </div>
            </div>
            <hr />
            <div className="p-3">
              <h4 className="job-description-heading">Job Description:</h4>
              <p className="job-description">
                {values.description || "<job description>"}
              </p>
            </div>
          </div>
          <div className="custom-button" onClick={downloadimage}>
            <div className="down-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#f7f7f7"
                className="bi bi-arrow-down-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
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
