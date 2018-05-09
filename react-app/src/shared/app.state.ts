import { PaintingState } from 'paintings/state/painting.state';
import { ContactState } from 'contact/state/contact.state';

export interface AppState {
  painting: PaintingState;
  contact: ContactState;
}
