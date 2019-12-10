import url from 'url';
import moment from 'moment';

/**
 * url 格式化
 * @param u
 */
export const formatUrl = (u: string) => {
  return url.parse(u, true);
};

/**
 * 时间格式化
 * @param date
 */
export const dateFormat = (date: number) => {
  return moment(date).format('YYYY-MM-DD ');
};
