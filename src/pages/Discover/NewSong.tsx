import React from 'react';
import {ListItem} from 'react-native-elements';
import globalColor from '../../globalColor';
import SongListShow from '../../components/SongListShow';
interface RecommendListProps {
  personalized: any;
  onPress: (item: any) => void;
}

export default ({personalized, onPress}: RecommendListProps) => {
  return (
    <>
      <ListItem
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
        }}
        title={'new_song'}
        titleStyle={{
          color: globalColor.INPUT_TEXT,
          fontWeight: '900',
        }}
        rightIcon={{
          type: 'octicon',
          name: 'chevron-right',
          color: globalColor.ICON_BUTTON_LIGHT,
        }}
      />

      <SongListShow list={personalized} onPress={onPress} />
    </>
  );
};
