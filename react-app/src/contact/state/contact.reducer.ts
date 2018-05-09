import { ContactState } from './contact.state';
import { AnyAction } from 'redux';
import { SENDING_MESSAGE, SEND_MESSAGE, OPEN_CONTACT_DIALOG, CLOSE_CONTACT_DIALOG } from './contact.actions';

const defaultState: ContactState = {
  sendingMessage: false,
  messageSuccess: false,
  contactDialogOpen: false
};

export function contactReducer(state: ContactState = defaultState, action: AnyAction): ContactState {
  switch (action.type) {
    case SENDING_MESSAGE: {
      return {
        ...state,
        sendingMessage: true,
        messageSuccess: false
      };
    }
    case SEND_MESSAGE: {
      return {
        contactDialogOpen: false,
        sendingMessage: false,
        messageSuccess: true
      };
    }
    case OPEN_CONTACT_DIALOG: {
      return {
        ...state,
        contactDialogOpen: true
      };
    }
    case CLOSE_CONTACT_DIALOG: {
      return {
        ...state,
        contactDialogOpen: false
      };
    }
    default: {
      return state;
    }
  }
}
