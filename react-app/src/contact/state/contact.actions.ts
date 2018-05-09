import { AnyAction } from 'redux';
import { store } from 'shared/root.store';
import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const OPEN_CONTACT_DIALOG = 'OPEN_CONTACT_DIALOG';
export const CLOSE_CONTACT_DIALOG = 'CLOSE_CONTACT_DIALOG';
export const CLEAR_MESSAGE_SUCCESS_MESSAGE = 'CLEAR_MESSAGE_SUCCESS_MESSAGE';

export function sendMessage(message: string): AnyAction {
  store.dispatch({
    type: SENDING_MESSAGE
  });
  return {
    type: SEND_MESSAGE,
    payload: axios.post(`${process.env.REACT_APP_FUNCTIONS_URL}/contact`, { message })
  };
}

export function openContactDialog(): AnyAction {
  return {
    type: OPEN_CONTACT_DIALOG
  };
}

export function closeContactDialog(): AnyAction {
  return {
    type: CLOSE_CONTACT_DIALOG
  };
}

export function clearSuccessMessage(): AnyAction {
  return {
    type: CLEAR_MESSAGE_SUCCESS_MESSAGE
  };
}
