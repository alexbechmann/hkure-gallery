import { PaintingState } from 'paintings/state/painting.state';
import { ContactState } from 'contact/state/contact.state';
import { FormStateMap } from 'redux-form';

export interface AppState {
  painting: PaintingState;
  contact: ContactState;
  form: FormStateMap;
}
