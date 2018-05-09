import { PaintingState } from './painting.state';
import { AnyAction } from 'redux';

const defaultState: PaintingState = {
  paintings: undefined,
  loadingPaintings: false
};

export function paintingReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
