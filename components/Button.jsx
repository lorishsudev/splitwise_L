import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const MyButton = ( props ) => {
  return (
    <Button
        title={props.title}
        buttonStyle={{
          borderColor: '#bebdc1',
          borderRadius: 5,
          height: 30,
        }}
        onPress={props.action}
        icon={props.icon}
        type="outline"
        raised
        titleStyle={{ color: '#515256',fontWeight: 'bold', fontSize: 5 }}
        containerStyle={{
          
          height: 30,
          marginHorizontal: 10,
          marginVertical: 4,
        }}
      />
      
  );
};

export default MyButton;