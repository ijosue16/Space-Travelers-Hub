import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/Rocket/rockets';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.Rocketz);
  const renderRockets = (rocketData) => rocketData.map((rkt) => (
    <Rocket
      key={rkt.id}
      id={rkt.id}
      description={rkt.description}
      name={rkt.name}
      image={rkt.image}
      reserved={rkt.reserved}
    />
  ));
  return (
    <div className="container-fluid d-flex gap-2 flex-column ">{renderRockets(rockets)}</div>
  );
}
export default Rockets;
