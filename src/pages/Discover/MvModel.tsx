import React from 'react';
import globalColor from '../../globalColor';
import {Image, ListItem, Icon} from 'react-native-elements';
import {TouchableOpacity, View, Text} from 'react-native';
interface MvModelProps {
  list: any[];
  onPress?: any;
}
export default ({list, onPress}: MvModelProps) => {
  return (
    <>
      <ListItem
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
        }}
        title={'personalized_mv'}
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
      {list.map(item => (
        <View
          key={item.id}
          style={{
            padding: 10,
            borderRadius: 10,
          }}>
          <View>
            <Image source={{uri: item.picUrl}} style={{height: 180}} />
            <TouchableOpacity
              onPress={() => onPress(item)}
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'absolute',
                zIndex: 2,
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                size={50}
                name="play"
                color={globalColor.ICON_BUTTON_LIGHT}
                type={'octicon'}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: 3,
              left: 15,
            }}>
            <Text
              style={{
                color: globalColor.INPUT_TEXT,
                fontSize: 20,
                marginTop: 5,
                fontWeight: '900',
              }}>
              {item.name}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                color: globalColor.INPUT_TEXT,
                fontSize: 15,
                marginTop: 5,
                marginBottom: 20,
              }}>
              {item.copywriter}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};
