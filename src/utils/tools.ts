import url from 'url';
export const formatUrl = (u: string) => {
  return url.parse(u, true);
};
