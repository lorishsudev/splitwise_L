import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Card, Icon, Button } from '@rneui/themed';
import GroupList from '../components/GroupList';

const status = 'You are all settled up!';

const B21 = ({ navigation }) => {
  const [groupName, setgroupName] = useState('');
  const handleStart = () => {
    navigation.navigate('B22');
  };


  return (
    <SafeAreaView>
      <Text
        style={styles.btnRight}
        onPress={() => {
          navigation.navigate('C');
        }}>
        Start a group
      </Text>
      <Text style={styles.titleLeft}>Groups</Text>

      <Card>
        <View style={styles.card}>
          <Image
            style={styles.image1}
            source={require('../assets/MyIcon.png')}
          />
          <View>
            <Text style={{ fontWeight: 'bold' }}>Total balance</Text>
            <Text style={{ marginTop: 5 }}>{status}</Text>
          </View>
        </View>
      </Card>

      <GroupList go={handleStart}/>

      <Text
        style={styles.textContent}>
        Hiding groups you settled up with over 7 days ago {'\n'}Tap to show {2}{' '}
        hidden groups{' '}
      </Text>
    </SafeAreaView>
  );
};

export default B21;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  image1: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  image2: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  btnRight: {
    marginTop: 10,
    marginRight: 10,
    textAlign: 'right',
    color: '#18A582',
  },
  titleLeft: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textContent: {
    margin: 10,
    fontSize: 10,
    textAlign: 'center',
    color: 'gray',
    lineHeight: 22,
  },
});
