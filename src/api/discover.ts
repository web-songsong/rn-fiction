import axios from '../utils/axios';

/**
 * 获取推荐专辑
 */
export const getAlbumNewest = () => {
  return axios.get('/album/newest');
};

/**
 * 推荐歌单
 * @param params
 */
export const getPersonalized = (params: {limit: number} = {limit: 4}) => {
  return axios.get('/personalized', {params});
};

/**
 * 推荐音乐
 */
export const getPersonalizedNewSong = () => {
  return axios.get('/personalized/newsong');
};

/**
 * 推荐mv
 */
export const getPersonalizedMv = () => {
  return axios.get('/personalized/mv');
};
