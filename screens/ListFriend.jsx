import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    SafeAreaView
  } from 'react-native';
  import React, { useState } from 'react';
  import  Ionicons from 'react-native-vector-icons/Ionicons';
  
  import { ListItem, Avatar } from '@rneui/themed';
  
  import { useSelector , useDispatch} from 'react-redux';
  import { deleteFriend , reset } from '../Redux/splitwiseSlice'
  
  const ListFriend = ({ route, navigation }) => {
   
    const dispatch = useDispatch();
  
    const [friends] = useSelector((state) => [
      state.splitwise.friends,
    ]);
  
    const friendautoid = useSelector((state) => [
      state.splitwise.friendautoid,
    ]);
  
    //過濾資料
    const [searchText, setSearchText] = useState('');
  
    const filteredData = friends.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    const handleDelete = (id) => {
      //Expo用這行 :
      dispatch(deleteFriend(id))
  
      //用手機才看的到確認框 :
      /*Alert.alert(
        'Delete Friend',
        'Are you sure you want to delete this friend?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel'
          },
          {
            text: 'Yes',
            onPress: () => { dispatch(deleteFriend(id)) }
          }
        ]
      );*/
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            marginBottom: 5,
          }}>
          <View style={[styles.searchcontainer,{flex:6}]}>
            <Ionicons name="search-outline" size={20} color="black" />
            <TextInput
              style={styles.input}
              //placeholder=""
              value={searchText}
              onChangeText={setSearchText}
              //onSubmitEditing={handleSearch}
            />
          </View>
  
          <Text
            style={{ color: '#20B2AA', flex:1.5 }}
            onPress={() => {
              navigation.navigate('AddFriend');
            }}>
            Add Friend
          </Text>
  
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
          <Text>Friends</Text>
          <TouchableOpacity onPress={ () => {dispatch(reset())} }>
            <Text style={{color:'blue'}}>Reset</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.listcontainer}>
          {filteredData.map((item, index) => (
            <ListItem bottomDivider key={index}>
              <Avatar
                rounded
                source={{ uri: item.image }}
              />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.phone}</ListItem.Subtitle>
              </ListItem.Content>
              <Text style={{color:'silver'}} onPress={ () => {navigation.navigate('EditFriend',{friendautoid:item.id,name:item.name,phone:item.phone})} }>Edit</Text>
              <Text style={{color:'red'}} onPress={() => {handleDelete(item.id)}}>Delete</Text>
            </ListItem>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ListFriend;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 15,
      //backgroundColor: 'white',
    },
    searchcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      //paddingHorizontal: 15,
      //backgroundColor: 'white',
    },
    input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 8,
    },
    listcontainer: {
      flex: 1,
      //backgroundColor: '#fff',
    },
  });
  