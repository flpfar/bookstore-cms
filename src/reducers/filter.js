import { CHANGE_FILTER } from '../actions/index';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
