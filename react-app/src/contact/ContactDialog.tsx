import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  CircularProgress,
  Snackbar,
  IconButton
} from 'material-ui';
import * as Icons from '@material-ui/icons';

export interface ContactDialogProps {
  open: boolean;
  sendingMessage: boolean;
  messageSuccess: boolean;
}

export interface ContactDialogDispatchProps {
  sendMessage: (message: string) => any;
  closeContactDialog: () => any;
  clearSuccessMessage: () => any;
}

interface Props extends ContactDialogProps, ContactDialogDispatchProps {}

export class ContactDialog extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }
  render() {
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.props.closeContactDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Contact Henriette Kure</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter message to send. You can expect a response within the next few days :)
            </DialogContentText>
            <TextField autoFocus margin="dense" label="Message" type="email" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeContactDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendMessage} color="primary" disabled={this.props.sendingMessage}>
              {this.props.sendingMessage ? <CircularProgress size={24} /> : 'Send'}
            </Button>
          </DialogActions>
        </Dialog>
        {this.renderSnackbar()}
      </div>
    );
  }

  renderSnackbar() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={this.props.messageSuccess}
        autoHideDuration={6000}
        onClose={this.props.clearSuccessMessage}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">Message sent!</span>}
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={this.props.clearSuccessMessage}>
            <Icons.Close />
          </IconButton>
        ]}
      />
    );
  }

  sendMessage() {
    this.props.sendMessage('test');
  }
}
