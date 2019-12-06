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

      if (state.flags[songid]) {
        return state;
      }
      state.flags[songid] = true;
      list.unshift({
        uri,
        songid,
      });
      return {
        ...state,
        playList: list,
      };
    },
  },
  effects: {
    *getSongInfo({payload}: any, {call, put}: any) {
      const {songmid} = payload;
      let uri;
      const fn = async () => {
        const res: any = await getMusicVKey({songmid});
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
