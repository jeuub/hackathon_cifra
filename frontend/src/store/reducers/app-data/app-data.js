import { ActionType } from "../../../utils/const";
import { extend } from "../../../utils/utils";

const initialState = {
  activities: [],
  initiatives: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ACTIVITIES:
      return extend(state, {
        activities: action.payload,
      });
    case ActionType.LOAD_INITIATIVES:
      return extend(state, {
        initiatives: action.payload,
      });
  }
  return state;
};

export { appData };
