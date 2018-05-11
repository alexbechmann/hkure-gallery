import * as React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  StyleRulesCallback,
  withStyles,
  WithStyles,
  CardHeader,
  Avatar,
  Grid,
  CircularProgress
} from 'material-ui';
import { EntryCollection } from 'contentful';
import parseMarkdown from 'parse-markdown-js';
import * as moment from 'moment';
import { ContactDialog } from 'contact/ContactDialog';
import Image from 'material-ui-image';
import { getPaintings } from 'paintings/state/painting.actions';
import { openContactDialog } from 'contact/state/contact.actions';
import { AppState } from 'shared/app.state';
import { combineContainers } from 'combine-containers';
import { connect } from 'react-redux';

interface PaintingsDispatchProps {
  getPaintings: () => any;
  openContactDialog: () => any;
}

type ClassNames = 'card' | 'avatar' | 'loader';

interface PaintingProps {
  paintings?: EntryCollection<any>;
  loadingPaintings: boolean;
}

interface Props extends WithStyles<ClassNames>, PaintingProps, PaintingsDispatchProps {}

const paintingsStyles: StyleRulesCallback<ClassNames> = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  loader: {
    margin: '100px auto'
  }
});

class PaintingsComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.getPaintings();
  }
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          {this.props.loadingPaintings && <CircularProgress className={this.props.classes.loader} />}
          {this.props.paintings ? (
            this.props.paintings.items.map(painting => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={painting.sys.id}>
                  <Card className={this.props.classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                          H
                        </Avatar>
                      }
                      title={painting.fields.title}
                      subheader={moment(painting.sys.createdAt).format('MMMM Do YYYY')}
                    />
                    <Image src={painting.fields.images[0].fields.file.url} aspectRatio={16 / 9} />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {painting.fields.title}
                      </Typography>
                      <Typography
                        component="p"
                        dangerouslySetInnerHTML={{
                          __html: parseMarkdown(painting.fields.description)
                        }}
                      />
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="secondary" onClick={this.props.openContactDialog}>
                        Contact for price
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <span />
          )}
        </Grid>
        <ContactDialog />
      </div>
    );
  }
}

function mapStateToProps(state: AppState): PaintingProps {
  return {
    paintings: state.painting.paintings,
    loadingPaintings: state.painting.loadingPaintings
  };
}

const mapDispatchToProps: PaintingsDispatchProps = { getPaintings, openContactDialog };

export const Paintings = combineContainers(PaintingsComponent, [
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(paintingsStyles, { withTheme: true })
]);
