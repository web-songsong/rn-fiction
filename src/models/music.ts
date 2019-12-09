import {DvaApi} from '../utils/typeInterface';
import {getMusicVKey} from '../api/listDetails';

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
      const {uri, songid} = payload;
      const list = [...state.playList];

      if (state.flags[songid] > -1) {
        return {
          ...state,
          currentIndex: state.flags[songid],
        };
      }
      state.flags[songid] = state.playList.length - state.currentIndex;
      list.push({
        uri,
        songid,
      });
      return {
        ...state,
        paused: false,
        playList: list,
        currentIndex: state.flags[songid],
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
      const {songmid} = payload;
      let uri;
      const fn = async () => {
        const res: any = await getMusicVKey({songmid});
        console.log(res);
        if (res.playLists.length) {
          uri = res.playLists[0];
        } else {
          console.log('xxxc----- error');
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
