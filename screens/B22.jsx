import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Icon, FAB } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../components/Button';
import { Appbar } from 'react-native-paper';
import { useDispatch} from 'react-redux';
import { clearAvatarlist } from '../Redux/splitwiseSlice'

const B22 = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [groupName, setgroupName] = useState('');
  const handleAddMembers = () => {
    dispatch(clearAvatarlist())
    navigation.navigate('Groups');
  };

  const { id } = route.params
  console.log(id)

  return (
    <SafeAreaView style={styles.container}>
      {/*上方功能鍵 & 標題*/}
      <View style={{ marginBottom: '10%' }}>
        <Appbar.Header
          style={{ height: 80, width: '100%', backgroundColor: '#18a582' }}>
          <Appbar.BackAction
            onPress={() => {
              navigation.push('B21'); 
            }}
          />
          <Appbar.Content title="" />
          <Appbar.Action
            icon={() => (
              <Ionicons name={'settings-outline'} size={20} color={'#FEFBF6'} />
            )}
            onPress={() => {}}
          />
        </Appbar.Header>
        <FAB
          icon={() => (
            <MaterialIcons name={'list-alt'} size={35} color={'#FEFBF6'} />
          )}
          color="#107259"
          style={styles.icon}
          animated={false}
          onPress={() => console.log('hello')}
        />
      </View>

      {/*Group名稱+Add member按鈕*/}
      <View style={{ paddingHorizontal: '10%', marginBottom: '5%' }}>
        <Text style={styles.text}>{id}</Text>
        <MyButton title="Add members" action={handleAddMembers}></MyButton>
      </View>

      {/*捲動軸按鈕*/}
      <View style={{ marginBottom: '5%' }}>
        <ScrollView horizontal={true}>
          <MyButton title="Settle up"></MyButton>
          <MyButton title="Balances"></MyButton>
          <MyButton title="Totals"></MyButton>
          <MyButton
            title="Chart"
            icon={{
              name: 'diamond',
              type: 'font-awesome',
              size: 15,
              color: 'black',
            }}></MyButton>
          <MyButton title="Test"></MyButton>
          <MyButton title="Test2"></MyButton>
        </ScrollView>
      </View>

      {/*內容*/}
      <View style={{ flex:1, justifyContent: 'center',alignItems: 'center' }}>
        <Ionicons name={"arrow-down-outline"} size={120} color={'#85011f'} />
      </View>


      <Text>B22</Text>
      <Text>{groupName}</Text>
    </SafeAreaView>
  );
};

export default B22;

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    flex: 1,
    marginHorizontal: 5,
    //backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  icon: {
    position: 'absolute',
    top: '60%',
    right: '70%',
  },
});
