import React from 'react';
import {Header, Avatar, Text, Badge} from 'react-native-elements';
import globalColor from '../globalColor';
import {View, StyleSheet} from 'react-native';
interface HaderProps {
  title: string;
  index: number;
}
const style = StyleSheet.create({
  badgeWrap: {
    borderWidth: 0,
    margin: 5,
    backgroundColor: globalColor.HEADER_DOT,
  },
  badgeCheck: {
    width: 15,
    backgroundColor: globalColor.HEADER_DOT_check,
  },
});
export default ({title, index}: HaderProps) => {
  return (
    <Header
      containerStyle={{
        borderBottomWidth: 0,
      }}
      placement="left"
      leftComponent={
        <View>
          <Text
            style={{
              color: '#fff',
              fontWeight: '900',
              fontSize: 25,
            }}>
            {title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {[0, 1].map((key: number) => (
              <Badge
                key={key}
                badgeStyle={[
                  style.badgeWrap,
                  key === index && style.badgeCheck,
                ]}
              />
            ))}
          </View>
        </View>
      }
      rightComponent={
        <Avatar
          rounded
          source={{
            uri:
              'http://ww1.sinaimg.cn/large/8449ed5dly1g8xdkv1jr4j20xc0xcdik.jpg',
          }}
        />
      }
      backgroundColor={globalColor.G_BG_COLOR}
    />
  );
};
