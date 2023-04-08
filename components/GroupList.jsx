import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Card, Icon, Button } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const GroupList = (pros) => {
  // 以下這行是RTK的固定寫法
  const [group] = useSelector((state) => [
    state.splitwise.group
      .slice()
      .sort((a, b) => b.id - a.id),
  ]);
  //元件中的頁面傳遞
  const navigation = useNavigation();
  console.log(group);

  return (
    <View>
      {group.map((item, index) => (
        <Card key={index}>
          <View style={styles.groupCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.image2}
                source={require('../assets/dinosaur.png')}
              />
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 10, textAlign: 'right', color: 'gray' }}
                onPress={() => {
                  navigation.navigate('B22', { id: item.id });
                }}>
                {item.result}
              </Text>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default GroupList;

const styles = StyleSheet.create({
  groupCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image2: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
