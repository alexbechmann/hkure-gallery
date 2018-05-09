import { createClient } from 'contentful';

const client = createClient({
  space: 'f72o6srvo4kk',
  accessToken: 'f6eea5678cbd51dc2bcf794fe9e565ab73cfb70177163628071f21f658afcbd2'
});

export const contentfulService = {
  client: () => client
};
