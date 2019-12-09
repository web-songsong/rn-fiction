import axios from '../utils/axios';

export const getMvPlay = (params: {vid: string}) => {
  return axios.get('/getMvPlay', {params});
};
