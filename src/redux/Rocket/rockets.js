import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const GET_ROCKETS = 'space traveler hub/rockets/GET_ROCKETS';
const URL = 'https://api.spacexdata.com/v3/rockets';
const INITIALSTATE = [];

const getRocketsksAPI = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};
export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const resp = await getRocketsksAPI();
  const rocketsData = [];
  resp.forEach((rocket) => {
    const singleRocket = {
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    };
    rocketsData.push(singleRocket);
  });
  return rocketsData;
});

const Rocketreducer = createReducer(INITIALSTATE, ((builder) => {
  builder
    .addCase(getRockets.fulfilled, ((state, action) => action.payload))
    .addDefaultCase();
}));

export default Rocketreducer;
