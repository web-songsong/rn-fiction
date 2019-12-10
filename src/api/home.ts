import axios from '../utils/axios';

export const getBanners = () => {
  return axios.get('/banner');
};

export const getTopPlayList = (params: {limit: number}) => {
  return axios.get('/top/playlist', {params});
};
export const getTopAlbum = (
  params: {limit?: number; offset?: number} = {limit: 10, offset: 0},
) => {
  return axios.get('/top/album', {params});
};

export const getAlbumNewest = () => {
  return axios.get('/album/newest');
};
