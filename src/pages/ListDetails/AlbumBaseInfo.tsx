import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import globalColor from '../../globalColor';
import {Overlay, Button} from 'react-native-elements';
export interface AlbumBaseInfoProps {
  date: string;
  name: string;
  singerName: string;
  docs: string;
}
const style = StyleSheet.create({
  dateText: {
    fontWeight: '900',
  },
  textBase: {color: globalColor.LIST_TEXT, fontSize: 14, padding: 5},
  titleName: {
    fontWeight: '900',
    fontSize: 20,
    color: globalColor.INPUT_TEXT,
  },
  infoWrap: {
    padding: 10,
  },
});
export default ({date, name, singerName, docs}: AlbumBaseInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <View style={style.infoWrap}>
        <Text style={[style.textBase, style.dateText]}>{date}</Text>
        <Text style={[style.textBase, style.titleName]}>{name}</Text>
        <Text style={style.textBase}>{singerName}</Text>
        <Text
          numberOfLines={2}
          style={style.textBase}
          ellipsizeMode="tail"
          onPress={() => setIsVisible(true)}>
          {docs}
        </Text>
      </View>

      <Overlay
        isVisible={isVisible}
        fullScreen={true}
        overlayBackgroundColor={globalColor.G_BG_COLOR}>
        <TouchableOpacity
          disabled={true}
          onPress={() => {
            console.log('xxxxx');
          }}>
          <ScrollView>
            <Text style={style.textBase}>{docs}</Text>
          </ScrollView>
        </TouchableOpacity>
      </Overlay>
    </>
  );
};
