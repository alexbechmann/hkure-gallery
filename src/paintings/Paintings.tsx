import * as React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from 'material-ui';
import { paintingService } from './painting.service';
import { EntryCollection } from 'contentful';

interface State {
  paintings?: EntryCollection<any>;
}

export class Paintings extends React.Component<{}, State> {
  state: State = {
    paintings: undefined
  };
  componentDidMount() {
    paintingService.getPaintings().then(paintings =>
      this.setState({
        paintings
      })
    );
  }
  render() {
    return (
      <div>
        {this.state.paintings ? (
          this.state.paintings.items.map(painting => {
            return (
              <Card key={painting.sys.id}>
                <CardMedia
                  image={painting.fields.images[0].fields.file.url}
                  style={{
                    height: '350px'
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {painting.fields.title}
                  </Typography>
                  <Typography component="p">{painting.fields.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })
        ) : (
          <span />
        )}
      </div>
    );
  }
}
