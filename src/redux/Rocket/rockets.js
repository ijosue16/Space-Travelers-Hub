import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const GET_ROCKETS = 'space traveler hub/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'space traveler hub/rockets/RESERVE_ROCKETS';
const CANCEL_RESERVATION = 'space traveler hub/rockets/CANCEL_RESERVATION';
const URL = 'https://api.spacexdata.com/v3/rockets';
const INITIALSTATE = [];

const getRocketsksAPI = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};
export const getRockets = createAsyncThunk(GET_ROCKETS, async (e, thunkAPI) => {
  const currentState = thunkAPI.getState();
  if (currentState.Rocketz.length === 0) {
    const resp = await getRocketsksAPI();
    const rocketsData = [];
    resp.forEach((rocket) => {
      const singleRocket = {
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
      };
      rocketsData.push(singleRocket);
    });
    return rocketsData;
  }
  return currentState.Rocketz;
});

export const reserveRocket = createAction(RESERVE_ROCKETS, (id) => ({
  payload: id,
}));

export const cancelRocketReservation = createAction(CANCEL_RESERVATION, (id) => ({
  payload: id,
}));

const Rocketreducer = createReducer(INITIALSTATE, ((builder) => {
  builder
    .addCase(getRockets.fulfilled, ((state, action) => action.payload))

    .addCase(reserveRocket, ((state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }))
    .addCase(cancelRocketReservation, ((state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }))
    .addDefaultCase();
}));

export default Rocketreducer;
