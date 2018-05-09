import { paintingService } from 'paintings/services/painting.service';

export const GET_PAINTINGS = 'GET_PAINTINGS';

export function getPaintings() {
  return {
    type: GET_PAINTINGS,
    payload: paintingService.getPaintings()
  };
}
