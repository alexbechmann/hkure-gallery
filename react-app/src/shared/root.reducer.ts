import { combineReducers, Reducer } from 'redux';
import { AppState } from './app.state';
import { paintingReducer } from 'paintings/state/painting.reducer';
import { contactReducer } from 'contact/state/contact.reducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer: Reducer<AppState> = combineReducers({
  painting: paintingReducer,
  contact: contactReducer,
  form: formReducer
});
