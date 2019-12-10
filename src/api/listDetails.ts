import axios from '../utils/axios';

export const getAlbum = (params: {id: number}) => {
  return axios.get('/album', {params});
};

export const getMusic = (params: {id: string}) => {
  return axios.get('/song/url', {params});
};
