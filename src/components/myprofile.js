import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.Rocketz
    .filter(((rocket) => rocket.reserved)));

  return (
    <>
      <div className="container-fluid d-block d-md-flex gap-2 ">
        <div className="flex-fill">
          <h4 className="">My rockets</h4>
          <ul className="list-group">
            {reservedRockets.length > 0 ? reservedRockets.map((rkt) => (
              <li
                className="list-group-item"
                key={rkt.id}
              >
                {rkt.name}
              </li>
            )) : <li className="border-0" key={0}>No reserved rockets yet!!</li> }

          </ul>
        </div>
        <div className="flex-fill">
          <h4 className="">My missions</h4>
          <ul className="list-group">
            <li className="list-group-item">An mission</li>

          </ul>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
