export const HTTP_COMMON = {
  url: 'https://www.googleapis.com/youtube/v3/',
  apiKey: 'AIzaSyAs6vsO2wzellbocGft91-9-m7LK-_L9FM ',
};

export const HTTP_REQUEST = {
  search: {
    request: 'search',
    maxResults: 2,
    type: 'video',
    part: 'snippet',
  },
  videos: {
    request: 'videos',
    maxResults: 0,
    type: '',
    part: 'snippet,statistics',
  },
};
