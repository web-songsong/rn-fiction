import axios from '../utils/axios';

export interface AlbumInfoPrams {
  albummid: string;
}
export const getAlbumInfo = (params: AlbumInfoPrams) => {
  return axios.get('/getAlbumInfo', {params});
};
