import axios from 'axios';

import { ACCESS_KEY } from '@src/api';
import { UNSPLASH_BASE_URL } from '@shared/constant/urls';

export const getPhotosAPI = async () => {
  try {
    const result = await axios({
      method: 'get',
      baseURL: UNSPLASH_BASE_URL,
      url: 'photos',
      headers: {
        Authorization: 'Client-ID ' + ACCESS_KEY,
      },
    });
    return result.data;
  } catch (err) {
    console.log('@@err', err);
  }
};
