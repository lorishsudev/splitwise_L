import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import { useDispatch,useSelector } from 'react-redux'
import { addFriend } from '../Redux/splitwiseSlice'

const AddFriend = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const friendautoid = useSelector((state) => [state.splitwise.friendautoid]);

  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput('');
  };

  const isButtonDisabled = name.trim() === '' || phone.trim() === '';

  const handleAddFriend = () => {
    const newContact = {
      id: parseInt(friendautoid),
      name: name,
      phone: phone,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    };
    dispatch(addFriend(newContact))
    navigation.navigate('ListFriend');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 上方功能鍵 & 標題 */} 
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{ color: '#20B2AA' }}
          onPress={() => {
            navigation.goBack();
          }}>
          Cancel
        </Text>

        <Text style={{ fontWeight: '450' }}>Add Friend</Text>

        <TouchableOpacity onPress={handleAddFriend} disabled={isButtonDisabled}>
          <Text
            style={{
              color: isButtonDisabled ? 'gray' : '#20B2AA',
              opacity: isButtonDisabled ? 0.5 : 1,
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      {/* 輸入區域 */}
      {/* Name */}
      <Text style={[styles.label, { marginTop: 25 }]}>Name</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focusedInput === 'name' ? '#20B2AA' : 'black',
            borderBottomWidth: focusedInput === 'name' ? 3 : 1,
          },
        ]}
        placeholder=""
        placeholderTextColor="silver"
        onFocus={() => handleFocus('name')}
        onBlur={handleBlur}
        onChangeText={setName}
        value={name}
      />

      {/* phone */}
      <Text style={[styles.label, { marginTop: 15 }]}>
        Phone number or email address
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focusedInput === 'phone' ? '#20B2AA' : 'black',
            borderBottomWidth: focusedInput === 'phone' ? 3 : 1,
          },
        ]}
        placeholder=""
        placeholderTextColor="silver"
        onFocus={() => handleFocus('phone')}
        onBlur={handleBlur}
        onChangeText={setphone}
        value={phone}
      />
    </SafeAreaView>
  );
};

export default AddFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    //backgroundColor: 'white',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  input: {
    //borderBottomWidth: 1,
    //borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
});
