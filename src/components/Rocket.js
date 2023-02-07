import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, name, description, image,
  } = props;
  const handleButtonclick = () => {
    console.log(id);
  };
  return (
    <>

      <div className="card mb-3 border-0 rounde-0 ">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={image} className="bd-placeholder-img img-fluid " width="100%" height="10" alt={name} />
          </div>
          <div className="col-md-9">
            <div className="card-body pt-md-0">
              <h5 className="card-title">
                {name}
                {' '}
              </h5>
              <p className="card-text">
                {description}
              </p>
              <button type="button" className="btn  btn-primary rounded-0 " onClick={handleButtonclick}>Reserve rocket</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Rocket;
