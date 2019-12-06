import axios from '../utils/axios';

export const getAlbumInfo = (params: {albummid: string}) => {
  return axios.get('/getAlbumInfo', {params});
};

export const getMusicVKey = (params: {songmid: string}) => {
  return axios.get('/getMusicVKey', {params});
};
