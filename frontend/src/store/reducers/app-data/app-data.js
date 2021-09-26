import { ActionType } from "../../../utils/const";
import { extend } from "../../../utils/utils";

const initialState = {
  activities: [{ "id": 1, "date_of_event": "26-09-2021", "title": "sadasd", "description": "asdasdas", "place": "asdasdas", "status": "Запланировано" }, { "id": 2, "date_of_event": "26-09-2021", "title": "sadasd", "description": "asdasdas", "place": "asdasdas", "status": "Запланировано" }],
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
