import { IMGGEN, KINDSET, TYPESET, COLOR1SET, COLOR2SET, COLOR3SET, RESET, BUDGETSET, SPACESET, SCRIPTSET } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case IMGGEN:
      return payload;
    case KINDSET:
        return {
            ...state,
            roomkind: payload,
        };
    case TYPESET:
        return {
            ...state,
            roomtype: payload,
        };
    case COLOR1SET:
        return {
            ...state,
            color1: payload,
        };
    case COLOR2SET:
        return {
            ...state,
            color2: payload,
        };
    case COLOR3SET:
        return {
            ...state,
            color3: payload,
        };
    case BUDGETSET:
        return {
            ...state,
            budget: payload,
        };
    case SPACESET:
        return {
            ...state,
            space: payload,
        };
    case SCRIPTSET:
        return {
            ...state,
            scription: payload,
        };
    case RESET:
        return null;
  }
  return state;
}