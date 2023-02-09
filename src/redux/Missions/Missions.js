import { createAsyncThunk, createAction, createReducer } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space traveler hub/missions/GET_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';
const INITIALSTATE = [];

const getMissionsAPI = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};
export const getMissions = createAsyncThunk(GET_MISSIONS, async (e, thunkAPI) => {
  const currentState = thunkAPI.getState();
  if (currentState.Missions.length === 0) {
    const resp = await getMissionsAPI();
    const missionsData = [];
    resp.forEach((mission) => {
      const singleMission = {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      };
      missionsData.push(singleMission);
    });
    return missionsData;
  }
  return currentState.Missions;
});

export const updateMission = createAction('mission/UPDATE_MISSION');

const Missionreducer = createReducer(INITIALSTATE, ((builder) => {
  builder
    .addCase(getMissions.fulfilled, ((state, action) => action.payload))
    .addCase(updateMission, (state, { payload }) => state.map((mission) => {
      if (mission.id === payload) {
        return { ...mission, reserved: !mission.reserved };
      }
      return mission;
    }))
    .addDefaultCase();
}));

export default Missionreducer;
