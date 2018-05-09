import { contentfulService } from '@app/contentful/contentful.service';
import { EntryCollection } from 'contentful';

export const paintingService = {
  getPaintings(): Promise<EntryCollection<any>> {
    return contentfulService.client().getEntries('painting');
  }
};
