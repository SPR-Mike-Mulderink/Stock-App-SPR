import { STOCK_DATA } from './types';

export const initialState = {
  stocks: [],
  user_name: `It's Undefined Mike`,
};

const reducer = (state, action) => {
  switch (action) {
    case STOCK_DATA:
      return {
        ...state,
        action
      }
    default:
      return state;
  }
}

export default reducer;