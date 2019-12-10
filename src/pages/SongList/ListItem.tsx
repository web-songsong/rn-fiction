import React from 'react';
import {Icon, ListItem} from 'react-native-elements';
import globalColor from '../../globalColor';
import MadeButton from '../../components/MadeButton';
import ShowImageWrap from '../../components/ShowImageWrap';
export interface AlbumListProps {
  list: Array<any>;
  onPress: any;
}

export default ({list, onPress}: AlbumListProps) => {
  console.log('test', list);
  const subtitleInit = (item: {ar: any}) =>
    item.ar.map((s: {name: string}) => s.name).join(' / ');

  return (
    <>
      <ListItem
        title={list.length + ''}
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
            <ShowImageWrap uri={item.al.picUrl} width={35} height={35} />
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
