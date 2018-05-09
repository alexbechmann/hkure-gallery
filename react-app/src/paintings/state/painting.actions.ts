import { paintingService } from 'paintings/services/painting.service';
import { store } from 'shared/root.store';

export const GET_PAINTINGS = 'GET_PAINTINGS';
export const GETTING_PAINTINGS = 'GETTING_PAINTINGS';

export function getPaintings() {
  store.dispatch({
    type: GETTING_PAINTINGS
  })
  return {
    type: GET_PAINTINGS,
    payload: paintingService.getPaintings()
  };
}
