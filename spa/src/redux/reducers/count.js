import {
  INCREASE_COUNT,
  DECREASE_COUNT
} from '../../constants';

export const count = (state=0, action) => {
  switch(action.type) {
    case(INCREASE_COUNT):
      return state + 1;

    case(DECREASE_COUNT):
      if(state === 0) return state;
      return state - 1;

    default:
      return state;
  }
}
