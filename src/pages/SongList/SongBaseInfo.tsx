import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import globalColor from '../../globalColor';
import {Overlay} from 'react-native-elements';

export interface AlbumBaseInfoProps {
  name: string;
  singerName?: string;
  docs: string;
}

const style = StyleSheet.create({
  dateText: {
    fontWeight: '900',
  },
  textBase: {
    color: globalColor.LIST_TEXT,
    fontSize: 14,
    padding: 5,
  },
  titleName: {
    fontWeight: '900',
    fontSize: 20,
    color: globalColor.INPUT_TEXT,
  },
  infoWrap: {
    padding: 10,
  },
});
export default ({name, singerName, docs}: AlbumBaseInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [textLayout, setTextLayout] = useState({width: 0, height: 0});
  return (
    <>
      <View style={style.infoWrap}>
        <Text style={[style.textBase, style.titleName]}>{name}</Text>
        {singerName && <Text style={style.textBase}>{singerName}</Text>}
        <Text
          numberOfLines={2}
          style={style.textBase}
          ellipsizeMode="tail"
          onPress={() => setIsVisible(true)}>
          {docs}
        </Text>
      </View>

      <Overlay
        animationType="fade"
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        overlayStyle={{
          padding: 15,
        }}
        transparent={true}
        overlayBackgroundColor={globalColor.G_BG_COLOR}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onLayout={({nativeEvent}) => setTextLayout(nativeEvent.layout)}
          style={{
            height: 300,
          }}>
          <Text
            onPress={() => setIsVisible(false)}
            style={[
              style.textBase,
              {
                minHeight: textLayout.height,
              },
            ]}>
            {docs}
          </Text>
        </ScrollView>
      </Overlay>
    </>
  );
};
