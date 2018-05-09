import { connect } from 'react-redux';
import { PaintingsDispatchProps, PaintingProps, Paintings } from 'paintings/Paintings';
import { getPaintings } from 'paintings/state/painting.actions';
import { AppState } from 'shared/app.state';

function mapStateToProps(state: AppState): PaintingProps {
  return {
    paintings: state.painting.paintings,
    loadingPaintings: state.painting.loadingPaintings
  };
}

const mapDispatchToProps: PaintingsDispatchProps = { getPaintings };

export const PaintingsConnected = connect(mapStateToProps, mapDispatchToProps)(Paintings);
