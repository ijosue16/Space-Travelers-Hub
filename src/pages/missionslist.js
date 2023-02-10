import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { getMissions, updateMission } from '../redux/Missions/Missions';

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
                <button type="button" className="btn"><Badge bg={mission.reserved ? 'primary' : 'secondary'}>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</Badge></button>
              </td>
              <td>
                <Button
                  variant={mission.reserved ? 'outline-danger' : 'outline-secondary'}
                  onClick={() => { dispatch(updateMission(mission.id)); }}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Missions;
