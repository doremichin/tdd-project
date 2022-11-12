import { getPhotosAPI } from '@src/api/getPhotosAPI';
import { searchPhotosAPI } from './searchPhotosAPI';

export const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export { getPhotosAPI, searchPhotosAPI };
