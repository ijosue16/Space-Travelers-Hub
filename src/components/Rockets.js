import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rockets = () => (
  <>

    <div className="card mb-3 border-0 rounde-0 ">
      <div className="row g-0">
        <div className="col-md-3">
          <svg className="bd-placeholder-img img-fluid " width="100%" height="170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
          </svg>
        </div>
        <div className="col-md-9">
          <div className="card-body pt-md-0">
            <h5 className="card-title">Rocket name </h5>
            <p className="card-text">
              This is a wider card
              with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
            <button type="button" className="btn  btn-primary rounded-0 ">Reserve rocket</button>
          </div>
        </div>
      </div>
    </div>

  </>
);
export default Rockets;
