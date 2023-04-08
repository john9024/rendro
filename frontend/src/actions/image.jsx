import { IMGGEN, KINDSET, TYPESET, COLOR1SET, COLOR2SET, COLOR3SET, BUDGETSET, SPACESET, SCRIPTSET} from "./types";

export const kindselect = (imggenkey) => (dispatch) => {
    dispatch({
        type: KINDSET,
        payload: imggenkey,
    })
    
};

export const typeselect = (imggenkey) => (dispatch) => {
    dispatch({
        type: TYPESET,
        payload: imggenkey,
    })
    
};

export const color1select = (imggenkey) => (dispatch) => {
    dispatch({
        type: COLOR1SET,
        payload: imggenkey,
    })
    
};

export const color2select = (imggenkey) => (dispatch) => {
    dispatch({
        type: COLOR2SET,
        payload: imggenkey,
    })
    
};

export const color3select = (imggenkey) => (dispatch) => {
    dispatch({
        type: COLOR3SET,
        payload: imggenkey,
    })
};

export const budgetselect = (imggenkey) => (dispatch) => {
    dispatch({
        type: BUDGETSET,
        payload: imggenkey,
    })
};

export const spaceselect = (imggenkey) => (dispatch) => {
    dispatch({
        type: SPACESET,
        payload: imggenkey,
    })
};

export const scriptselect = (imggenkey) => (dispatch) => {
    dispatch({
        type: SCRIPTSET,
        payload: imggenkey,
    })
};

