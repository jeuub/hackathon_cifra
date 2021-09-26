import { loadActivities } from "./action";


export const fetchActivityList = () => (dispatch, _getState, api) => {
  console.log(api);
  api
    .get('event/')
    .then(({ data }) => {
      console.log(data);
      // dispatch(loadActivities(data));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    });
};
