import {ActionType} from "../../utils/const";

export const loadActivities = (activities) => ({
  type: ActionType.LOAD_ACTIVITIES,
  payload: activities
});

export const loadInitiatives = (initiatives) => ({
  type: ActionType.LOAD_INITIATIVES,
  payload: initiatives
});
