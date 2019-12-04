import axios from '../utils/axios';
import {AxiosFn} from '../utils/typeInterface';

export const getRecommend: AxiosFn = (params = {}) => {
  return axios.get('/getRecommend', {params});
};
