import {AxiosRequestConfig} from 'axios';

export interface dvaModel {
  dispatch?: any;
  [modelName: string]: any;
}

export interface NavigatorProps extends dvaModel {
  navigation: any;
  screenProps: any;
}

export interface TabRouterProps extends dvaModel {
  jumpTo: any;
  position: any;
  route: any;
}

export type AxiosFn = (config?: AxiosRequestConfig) => any;
