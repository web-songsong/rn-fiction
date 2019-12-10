import {DvaApi} from '../utils/typeInterface';
import {getMusic} from '../api/listDetails';

export interface MusicState {
  paused: boolean;
  currentIndex: number;
  playList: Array<any>;
  flags: any;
}

const music: DvaApi<MusicState> = {
  namespace: 'music',
  state: {
    paused: false,
    currentIndex: 0,
    playList: [],
    flags: {},
  },
  reducers: {
    addSong(state: MusicState, {payload}: any) {
      const {uri, id} = payload;
      const list = [...state.playList];

      if (state.flags[id] > -1) {
        return {
          ...state,
          currentIndex: state.flags[id],
        };
      }
      state.flags[id] = state.playList.length - state.currentIndex;
      list.push({
        uri,
        id: id,
      });
      return {
        ...state,
        paused: false,
        playList: list,
        currentIndex: state.flags[id],
      };
    },
    changePaused(state: MusicState) {
      return {
        ...state,
        paused: !state.paused,
      };
    },
    upSong(state: MusicState) {
      let index = state.currentIndex;
      const maxIndex = state.playList.length - 1;
      index = index === 0 ? maxIndex : --index;
      console.log(index);
      return {
        ...state,
        currentIndex: index,
      };
    },
    downSong(state: MusicState) {
      let index = state.currentIndex;
      const maxIndex = state.playList.length - 1;
      index = index === maxIndex ? 0 : ++index;
      console.log(index);
      return {
        ...state,
        currentIndex: index,
      };
    },
  },
  effects: {
    *getSongInfo({payload}: any, {call, put}: any) {
      const {id} = payload;
      let uri;
      const fn = async () => {
        const res: any = await getMusic({id});
        uri = res.data[0].url;
        if (!uri) {
          console.log('dva model music----- error');
        }
      };
      yield call(fn);
      yield put({
        type: 'addSong',
        payload: {
          ...payload,
          uri,
        },
      });
    },
  },
};

export default music;
