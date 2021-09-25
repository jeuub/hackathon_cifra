import {ActionType} from '../utils/const'

export const loadActivities = (activities) => {
  console.log(activities);
  ({
  type: ActionType.LOAD_ACTIVITIES,
  payload: activities
})};
