export const MIN_LENGTH_TITLE_CARD_CREATE = 3;
export const MAX_LENGTH_TITLE_CARD_CREATE = 20;
export const MAX_LENGTH_DESCRIPTION_CARD_CREATE = 255;

export const CARD_CREATE_VALIDATION_TEXT = {
  title: {
    required: 'Please enter a title',
    minLength: 'The title is too short',
    maxLength: 'The title is too long',
  },
  description: {
    maxLength: 'The description is too long',
  },
  linkImage: {
    required: 'Please enter a link to the image',
    url: 'The image link is invalid',
  },
  linkVideo: {
    required: 'Please enter a link to the video',
    url: 'The video link is invalid',
  },
  dateCreation: {
    required: 'Please enter a creation date',
    date: 'The date is invalid',
  },
};
