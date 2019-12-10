import axios from 'axios';
/**
 * 获取歌单信息
 * @param params
 */
export const getPlaylistDetail = (params: {id: number}) => {
  return axios.get('/playlist/detail', {params});
};
