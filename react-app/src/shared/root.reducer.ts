import { combineReducers, Reducer } from 'redux';
import { AppState } from './app.state';
import { paintingReducer } from 'paintings/state/painting.reducer';

export const rootReducer: Reducer<AppState> = combineReducers({
  painting: paintingReducer
});
