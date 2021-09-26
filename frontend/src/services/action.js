import {ActionType} from '../utils/const'

export const loadActivities = (activities) => {
  console.log(activities);
  ({
  type: ActionType.LOAD_ACTIVITIES,
  payload: activities
})};

export const loadInitiatives = (initiatives) => {
  console.log(initiatives);
  ({
  type: ActionType.LOAD_INITIATIVES,
  payload: initiatives
})};
