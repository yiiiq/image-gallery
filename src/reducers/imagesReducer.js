import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images]; //spread operator which takes in all the argument in place
    }
    return state;
};

export default imagesReducer;
