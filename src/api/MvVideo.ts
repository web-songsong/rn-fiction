import axios from '../utils/axios';

export const getMvPlay = (params: {mvid: number}) => {
  return axios.get('/mv/detail', {params});
};
