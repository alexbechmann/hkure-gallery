import { ContactDialog, ContactDialogProps, ContactDialogDispatchProps } from './ContactDialog';
import { AppState } from 'shared/app.state';
import { sendMessage, closeContactDialog, clearSuccessMessage } from 'contact/state/contact.actions';
import { connect } from 'react-redux';

function mapStateToProps(state: AppState): ContactDialogProps {
  return {
    open: state.contact.contactDialogOpen,
    messageSuccess: state.contact.messageSuccess,
    sendingMessage: state.contact.sendingMessage
  };
}

const mapDispatchToProps: ContactDialogDispatchProps = { sendMessage, closeContactDialog, clearSuccessMessage };

export const ContactDialogConnected = connect(mapStateToProps, mapDispatchToProps)(ContactDialog);
