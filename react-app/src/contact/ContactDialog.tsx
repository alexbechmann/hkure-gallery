import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  CircularProgress
} from 'material-ui';

export interface ContactDialogProps {
  open: boolean;
  sendingMessage: boolean;
  messageSuccess: boolean;
}

export interface ContactDialogDispatchProps {
  sendMessage: (message: string) => any;
  closeContactDialog: () => any;
}

interface Props extends ContactDialogProps, ContactDialogDispatchProps {}

export class ContactDialog extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.closeContactDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.closeContactDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={this.sendMessage} color="primary" disabled={this.props.sendingMessage}>
            {this.props.sendingMessage ? <CircularProgress /> : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  sendMessage() {
    this.props.sendMessage('test');
  }
}
