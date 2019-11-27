import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

export default () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <SearchBar
      inputContainerStyle={{
        borderRadius: 20,
      }}
      cancelButtonTitle="取消"
      platform="ios"
      placeholder="Type Here..."
      onChangeText={setSearchInput}
      value={searchInput}
    />
  );
};
