import React, {useState} from 'react';
import {SearchBar, IconProps} from 'react-native-elements';
import globalColor from '../globalColor';
export default () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <SearchBar
      inputContainerStyle={{
        height: 30,
        borderRadius: 30,
        backgroundColor: globalColor.INPUT_BG,
      }}
      cancelButtonTitle="取消"
      searchIcon={{color: globalColor.INPUT_SEARCH_ICON} as IconProps}
      cancelButtonProps={{
        buttonTextStyle: {color: globalColor.INPUT_TEXT},
      }}
      platform="ios"
      inputStyle={{
        color: globalColor.INPUT_TEXT,
      }}
      containerStyle={{
        backgroundColor: globalColor.G_BG_COLOR,
      }}
      onChangeText={setSearchInput}
      value={searchInput}
    />
  );
};
