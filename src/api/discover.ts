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
