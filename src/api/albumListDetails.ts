import axios from '../utils/axios';

/**
 * 获取专辑
 * @param params
 */
export const getAlbum = (params: {id: number}) => {
  return axios.get('/album', {params});
};

/**
 * 货物音乐url
 * @param params
 */
export const getMusic = (params: {id: number}) => {
  return axios.get('/song/url', {params});
};
