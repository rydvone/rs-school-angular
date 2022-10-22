export const MinLengthTitleCardCreate = 3;
export const MaxLengthTitleCardCreate = 20;
export const MaxLengthDescriptionCardCreate = 255;

export const CardCreateValidationText = {
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
