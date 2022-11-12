import axios from 'axios';

import { ACCESS_KEY } from '@src/api';
import { UNSPLASH_BASE_URL } from '@shared/constant/urls';

export const searchPhotosAPI = async (query?: string) => {
  try {
    const result = await axios({
      method: 'get',
      baseURL: UNSPLASH_BASE_URL,
      url: '/search/photos',
      headers: {
        Authorization: 'Client-ID ' + ACCESS_KEY,
      },
      params: {
        query,
      },
    });
    return result.data;
  } catch (err) {
    console.log('@@err', err);
  }
};
