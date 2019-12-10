export interface DvaModel {
  dispatch?: any;
  [modelName: string]: any;
}

export interface NavigatorProps extends DvaModel {
  navigation: any;
  screenProps: any;
}

export interface TabRouterProps extends DvaModel {
  jumpTo: any;
  position: any;
  route: any;
}

export interface DvaApi<T> {
  namespace: string;
  state: T;
  reducers: any;
  effects: any;
}
