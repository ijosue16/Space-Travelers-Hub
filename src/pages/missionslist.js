import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions } from '../redux/Missions/Missions';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.Missions);
  return (
    <div className="container-fluid d-flex gap-2 flex-column ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="mission_name-td" width={100}>{mission.name}</td>
              <td className="mission_description" width={1150}>{mission.description}</td>
              <td>
                <button type="button" className="btn btn-secondary">Not a Member</button>
              </td>
              <td>
                <button type="button" className="btn btn-secondary">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Missions;
