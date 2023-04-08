import { IMG_UPLOAD } from "@/actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case IMG_UPLOAD:
          return {
              ...state,
              photo: payload,
          }; 
    }
      
    return state;
  }
