import {DvaApi} from '../utils/typeInterface';
import {getMusic} from '../api/albumListDetails';

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
    addSong(state: MusicState, {payload}: {payload: any[]}) {
      // const {id} = payload;
      const list = [...state.playList];
      payload.forEach((item, key) => {
        let id = item.id;
        let index = list.length + key;
        if (state.flags[id] > -1) {
          return state;
        }
        state.flags[id] = index;
      });
      list.push(...payload);
      return {
        ...state,
        paused: false,
        playList: list,
        currentIndex: state.flags[payload[0].id],
      };
    },
    changePaused(state: MusicState) {
      return {
        ...state,
        paused: !state.paused,
      };
    },
    outputPaused(state: MusicState, {payload}: any) {
      return {
        ...state,
        paused: payload.paused,
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
    selectMusic(state: MusicState, {payload}: {payload: any}) {
      return {...state, currentIndex: payload.index};
    },
  },
  effects: {
    *getSongInfo({payload}: any, {call, put, select}: any) {
      const {id} = payload;
      const flags = yield select((state: any) => state.music.flags);
      let result: any;
      const fn = async () => {
        result = await getMusic({id});
        if (!result.data.length) {
          return console.log('dva model music----- error');
        }
      };
      if (flags[id] > -1) {
        return yield put({
          type: 'selectMusic',
          payload: {index: flags[id]},
        });
      }
      yield call(fn);
      yield put({
        type: 'addSong',
        payload: result.data,
      });
    },
  },
};

export default music;
