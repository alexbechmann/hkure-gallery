import { PaintingState } from './painting.state';
import { AnyAction } from 'redux';
import { GETTING_PAINTINGS, GET_PAINTINGS } from './painting.actions';

const defaultState: PaintingState = {
  paintings: undefined,
  loadingPaintings: false
};

export function paintingReducer(state = defaultState, action: AnyAction): PaintingState {
  switch (action.type) {
    case GETTING_PAINTINGS: {
      return {
        ...state,
        loadingPaintings: true
      };
    }
    case GET_PAINTINGS: {
      return {
        loadingPaintings: false,
        paintings: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
