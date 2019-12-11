import React from 'react';
import {ListItem} from 'react-native-elements';
import globalColor from '../globalColor';
import ShowImageWrap from './ShowImageWrap';
export interface SongListShow {
  list: Array<any>;
  onPress: any;
}

export default ({list, onPress}: SongListShow) => {
  const subtitleInit = (item: {song: any}) =>
    item.song.artists.map((s: {name: string}) => s.name).join(' / ');
  return (
    <>
      {list.map(item => (
        <ListItem
          onPress={() => onPress(item)}
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          }}
          titleStyle={{
            color: globalColor.INPUT_TEXT,
          }}
          leftElement={
            <ShowImageWrap
              uri={item.picUrl}
              width={35}
              height={35}
              borderRadius={0}
            />
          }
          key={item.id}
          title={item.name}
          subtitle={subtitleInit(item)}
          subtitleStyle={{
            color: globalColor.LIST_TEXT,
          }}
          bottomDivider
        />
      ))}
    </>
  );
};
