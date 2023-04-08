import { View, Text, StyleSheet, Image, TextInput, Alert, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Card, Icon, Button, Tab, TabView } from '@rneui/themed';
import { IniGroupList } from '../data/IniGroupList';

import { useDispatch } from 'react-redux';
import { addGroup, clearGroup } from '../Redux/splitwiseSlice';
import GroupList from '../components/GroupList';
import moment from 'moment'
import SwitchSelector from "react-native-switch-selector";

const C = ({ navigation }) => {
  const dispatch = useDispatch();

  const [groupName, setgroupName] = useState('');
  const [groupType, setgroupType] = useState(' ');
  const [index, setindex] = useState(0);
  const [txtplaceholder, settxtplaceholder] = useState('123 Seame Street');

  const filteredData = IniGroupList.placeholder.filter((item) =>
    item.id.includes(index)
  );

  let nid = moment(new Date()).format('YYYYMMDDHHmmssSSS')

  const handleDone = () => {
    console.log(GroupList);
    newGroup = {
      //ID改為時間序，好處是不需要有創造時間
      id: nid,
      name: groupName,
      type: groupType,
      result: 'no expense >',
    };

    if (groupName.length == 0) {
      Alert.alert('Warning!', 'Please write your data.', [{ text: 'OK' }]);
      console.log('Warning!', 'Please write your data.');
    } else {
      dispatch(addGroup(newGroup));
      console.log(newGroup);
      setgroupName('');
      setgroupType('');
      navigation.navigate('B22', { id: nid });
    }
  };


  const options = [
    { label: "Home", value: "123 Seame Street" },
    { label: "Trip", value: "NYC trip" },
    { label: "Couplr", value: "You & Me" },
    { label: "Other", value: "Coworkers" }
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/*上方功能鍵 & 標題*/}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={styles.btnLeft}
          onPress={() => {
            navigation.navigate('B21');
          }}>
          Cancel
        </Text>
        <Text style={styles.titleCenter}>Create a group</Text>
        <Text
          style={[styles.btnRight, { fontWeight: 'bold' }]}
          onPress={handleDone}>
          Done
        </Text>
      </View>

      <Card>
        <View style={styles.card}>
          <Image
            style={styles.image1}
            source={require('../assets/MyIcon.png')}
          />
          <View>
            <Text style={{ fontWeight: 'bold' }}>Group name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setgroupName}
              // 篩選之後只會有一筆，所以index只有0
              placeholder={txtplaceholder}
            />
          </View>
        </View>
      </Card>

      <Text style={styles.titleLeft}>Group type</Text>

      <SwitchSelector
        options={options}
        initial={0}
        onPress={value => settxtplaceholder(value)}
        selectedColor={"black"}
        buttonColor={"white"}
        borderColor={"gray"}
        hasPadding
        bold
        backgroundColor={"gray"}
        borderRadius={10}
        style={{marginHorizontal:10, marginTop: 15}}
      />

      {/* <Tab
        value={index}
        onChange={(i) => {
          setindex(i);
        }}
        indicatorStyle={{ height: 0 }}
        style={styles.tab}>
        <Tab.Item
          title="Home"
          titleStyle={styles.tabItem}
          containerStyle={(active) => ({
            backgroundColor: active ? 'white' : undefined,
            margin: 5,
            borderRadius: 5,
            justifyContent: 'center',
          })}
        />
        <Tab.Item
          title="Trip"
          titleStyle={styles.tabItem}
          containerStyle={(active) => ({
            backgroundColor: active ? 'white' : undefined,
            margin: 5,
            borderRadius: 5,
            justifyContent: 'center',
          })}
        />
        <Tab.Item
          title="Couple"
          titleStyle={styles.tabItem}
          containerStyle={(active) => ({
            backgroundColor: active ? 'white' : undefined,
            margin: 5,
            borderRadius: 5,
            justifyContent: 'center',
          })}
        />
        <Tab.Item
          title="Other"
          titleStyle={styles.tabItem}
          containerStyle={(active) => ({
            backgroundColor: active ? 'white' : undefined,
            margin: 5,
            borderRadius: 5,
            justifyContent: 'center',
          })}
        />
      </Tab> */}

      {/* <Text onPress={()=>{dispatch(clearGroup())}}>Clean all</Text> */}
    </SafeAreaView>
  );
};

export default C;

const styles = StyleSheet.create({
  container: {},
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
  input: {
    color: 'gray',
    marginTop: 5,
  },
  tabItem: {
    fontSize: 14,
    color: 'black',
  },
  tab: {
    margin: 10,
    borderWidth: 0,
    backgroundColor: 'gray',
    borderRadius: 10,
    height: 40,
  },
  btnRight: {
    marginTop: 10,
    marginRight: 10,
    textAlign: 'right',
    color: '#18A582',
  },
  btnLeft: {
    marginTop: 10,
    marginLeft: 10,
    textAlign: 'left',
    color: '#18A582',
  },
  titleLeft: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  titleCenter: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
