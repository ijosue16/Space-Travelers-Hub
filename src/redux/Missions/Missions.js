import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space traveler hub/missions/GET_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';
const INITIALSTATE = [];

const getMissionsAPI = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};
export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const resp = await getMissionsAPI();
  const missionsData = [];
  resp.forEach((mission) => {
    const singleMission = {
      id: mission.id,
      name: mission.mission_name,
      description: mission.description,
    };
    missionsData.push(singleMission);
  });
  return missionsData;
});

const Missionreducer = createReducer(INITIALSTATE, ((builder) => {
  builder
    .addCase(getMissions.fulfilled, ((state, action) => action.payload))
    .addDefaultCase();
}));

export default Missionreducer;
