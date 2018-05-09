import { EntryCollection } from 'contentful';

export interface PaintingState {
  paintings: EntryCollection<any> | undefined;
  loadingPaintings: boolean;
}
