import React from 'react';
import {ScrollView} from 'react-native';
import {List, InputItem, Button} from 'antd-mobile-rn';

const Home = () => {
  return (
    <ScrollView>
      <List renderHeader={'node'}>
        <InputItem
          onChange={value => {
            console.log(value);
          }}
          placeholder="url">
          url:
        </InputItem>
        <InputItem
          onChange={value => {
            console.log(value);
          }}
          placeholder="keyword">
          key:
        </InputItem>
        <List.Item>
          <Button
            onClick={() => {
              console.log(fetch);
            }}
            type="primary">
            下载
          </Button>
        </List.Item>
      </List>
    </ScrollView>
  );
};

export default Home;
