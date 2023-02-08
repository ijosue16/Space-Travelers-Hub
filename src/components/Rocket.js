import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocketReservation, reserveRocket } from '../redux/Rocket/rockets';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  const dispatch = useDispatch();

  const ReserveRockethandler = () => {
    dispatch(reserveRocket(id));
  };

  const RockeReserveCancelthandler = () => {
    dispatch(cancelRocketReservation(id));
  };
  return (
    <>

      <div className="card mb-3 border-0 rounde-0 shadow">
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
                { reserved ? [<span key={0}><span className="badge bg-success py-2" key={0}>Reserved</span></span>, '   ', description] : description }
              </p>
              { reserved
                ? (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={RockeReserveCancelthandler}
                  >
                    Cancel Reservation
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={ReserveRockethandler}
                  >
                    Reserve rocket
                  </button>
                )}
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
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
