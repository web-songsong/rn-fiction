import React from 'react';
import {ListItem} from 'react-native-elements';
import globalColor from '../../globalColor';
import LineLayout from '../../components/LineLayout';
import ShowImageWrap from '../../components/ShowImageWrap';
import MadeButton from '../../components/MadeButton';
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
        title={'personalized'}
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
      <LineLayout>
        {personalized.map((item: any) => (
          <ShowImageWrap
            borderRadius={20}
            key={item.id}
            width={165}
            height={165}
            margin={5}
            uri={item.picUrl}
            onPress={() => onPress(item)}
            cover={
              <MadeButton
                title={'#' + item.copywriter.slice(0, 4)}
                style={{
                  width: 80,
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  zIndex: 2,
                }}
              />
            }
          />
        ))}
      </LineLayout>
    </>
  );
};
