import { loadActivities } from "./action";


export const fetchActivityList = () => (dispatch, _getState, api) => {
  api
    .get('event/')
    .then(({data})  => {
      dispatch(loadActivities(data));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    });
};


export const fetchInitiativesList = () => (dispatch, _getState, api) => {
  api
    .get('initiative/')
    .then(({data})  => {
      console.log(data);
      dispatch(loadInitiatives(data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(createError(err.response));
    });
};
