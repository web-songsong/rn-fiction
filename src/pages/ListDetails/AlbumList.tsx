import React from 'react';
import {Icon, Text, ListItem} from 'react-native-elements';
import globalColor from '../../globalColor';
import MadeButton from '../../components/MadeButton';

export interface AlbumListProps {
  total: number;
  list: Array<any>;
}

export default ({total, list}: AlbumListProps) => {
  const subtitleInit = (item: {singer: any}) =>
    item.singer.map((s: {name: string}) => s.name).join(' / ');

  return (
    <>
      <ListItem
        title={total.toString()}
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        titleStyle={{
          color: globalColor.LIST_TEXT,
          fontWeight: '900',
        }}
        leftElement={
          <MadeButton
            onPress={() => {}}
            icon={
              <Icon
                name="play"
                color={globalColor.INPUT_BG}
                type="foundation"
              />
            }
          />
        }
        rightElement={
          <Icon
            underlayColor="transparent"
            name="checkbox"
            color={globalColor.LIST_TEXT}
            type="foundation"
            onPress={() => {}}
          />
        }
      />

      {list.map((item, index) => (
        <ListItem
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          }}
          titleStyle={{
            color: globalColor.INPUT_TEXT,
          }}
          leftElement={
            <Text
              style={{
                width: 25,
                textAlign: 'right',
                color: globalColor.INPUT_TEXT,
                fontWeight: '900',
              }}>
              {index + 1}
            </Text>
          }
          key={item.songid}
          title={item.songname}
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
