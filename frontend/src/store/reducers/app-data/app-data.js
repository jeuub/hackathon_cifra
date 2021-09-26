import { ActionType } from "../../../utils/const";
import { extend } from "../../../utils/utils";

const initialState = {
  activities: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ACTIVITIES:
      return extend(state, {
        activities: action.payload,
      });
  }
  return state;
};

export { appData };
