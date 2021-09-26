import {ActionType} from "../../utils/const";

export const loadActivities = () => ({
  type: ActionType.LOAD_ACTIVITIES,
  payload: activities
});
