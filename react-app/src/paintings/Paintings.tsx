import * as React from 'react';
import {
  Card,
  CardMedia,
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
import { ContactDialogConnected } from 'contact/ContactDialogConnected';

export interface PaintingsDispatchProps {
  getPaintings: () => any;
  openContactDialog: () => any;
}

type ClassNames = 'card' | 'avatar' | 'loader';

export interface PaintingProps {
  paintings?: EntryCollection<any>;
  loadingPaintings: boolean;
}

interface Props extends WithStyles<ClassNames>, PaintingProps, PaintingsDispatchProps {}

export const paintingsStyles: StyleRulesCallback<ClassNames> = theme => ({
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
                <Grid item xs={12} sm={6} lg={4} xl={2} key={painting.sys.id}>
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
                    <CardMedia
                      image={painting.fields.images[0].fields.file.url}
                      style={{
                        height: '250px'
                      }}
                    />
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
        <ContactDialogConnected />
      </div>
    );
  }
}

export const Paintings = withStyles(paintingsStyles, { withTheme: true })(PaintingsComponent);
