import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  CircularProgress,
  Snackbar,
  IconButton,
  FormControl,
  withStyles,
  StyleRulesCallback,
  WithStyles
} from 'material-ui';
import * as Icons from '@material-ui/icons';
import { connect } from 'react-redux';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { sendMessage, closeContactDialog, clearSuccessMessage } from 'contact/state/contact.actions';
import { AppState } from 'shared/app.state';
import { combineContainers } from 'combine-containers';
const ReduxFormMaterialFields = require('redux-form-material-ui');
const required = (value: any) => (value ? undefined : 'Required');

interface ContactDialogProps {
  open: boolean;
  sendingMessage: boolean;
  messageSuccess: boolean;
}

interface ContactDialogDispatchProps {
  sendMessage: (message: string) => any;
  closeContactDialog: () => any;
  clearSuccessMessage: () => any;
}

type StyleClassNames = 'content';

const styles: StyleRulesCallback<StyleClassNames> = theme => ({
  content: {
    overflowX: 'hidden',
    minHeight: '100px'
  }
});

interface Props
  extends ContactDialogProps,
    ContactDialogDispatchProps,
    InjectedFormProps,
    WithStyles<StyleClassNames> {}

class ContactDialogComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  render() {
    return (
      <form id="contact-form" onSubmit={this.props.handleSubmit(this.handleOnSubmit)}>
        <Dialog open={this.props.open} onClose={this.props.closeContactDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Contact Henriette Kure</DialogTitle>
          <DialogContent className={this.props.classes.content}>
            <DialogContentText>
              Enter message to send. You can expect a response within the next few days :)
            </DialogContentText>
            <FormControl fullWidth>
              <Field
                autoFocus
                margin="dense"
                label="Message"
                name="message"
                component={ReduxFormMaterialFields.TextField}
                validate={required}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeContactDialog} color="primary">
              Cancel
            </Button>
            <Button color="primary" disabled={this.props.sendingMessage} type="submit" form="contact-form">
              {this.props.sendingMessage ? <CircularProgress size={24} /> : 'Send'}
            </Button>
          </DialogActions>
        </Dialog>
        {this.renderSnackbar()}
      </form>
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

  handleOnSubmit(formData: any) {
    this.props.sendMessage(formData.message);
  }
}

function mapStateToProps(state: AppState): ContactDialogProps {
  return {
    open: state.contact.contactDialogOpen,
    messageSuccess: state.contact.messageSuccess,
    sendingMessage: state.contact.sendingMessage
  };
}

const mapDispatchToProps: ContactDialogDispatchProps = { sendMessage, closeContactDialog, clearSuccessMessage };

export const ContactDialog = combineContainers(ContactDialogComponent, [
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'contactForm',
    destroyOnUnmount: true
  }),
  withStyles(styles, { withTheme: true })
]);
