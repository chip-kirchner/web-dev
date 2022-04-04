import {DELETE_TUIT, CREATE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../actions/tuits-actions"

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        default:
            return state;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);

    }
}
export default tuitsReducer;