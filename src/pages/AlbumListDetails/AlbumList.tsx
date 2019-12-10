import React from 'react';
import {Icon, Text, ListItem} from 'react-native-elements';
import globalColor from '../../globalColor';
import MadeButton from '../../components/MadeButton';

export interface AlbumListProps {
  list: Array<any>;
  onPress: any;
}

export default ({list, onPress}: AlbumListProps) => {
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

      {list.map((item, index) => (
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
