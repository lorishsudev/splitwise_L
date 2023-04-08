import { View, Text, Button, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Landing = ({ navigation }) => {
    const isFocused = useIsFocused();

    useEffect(() => {
        //console.log("called");
        const timer = setTimeout(() => {
            navigation.navigate('B');
        }, 500);
    }, [navigation, isFocused]);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, marginBottom: 20, color: 'white' }}>SplitWise</Text>
            {/*<Button
        title="Login"
        onPress={() => {
          navigation.navigate('B');
        }}
      />*/}
            <MaterialCommunityIcons name={"rhombus-split-outline"} size={120} color={'#FEFBF6'} />
            <Text style={{ fontSize: 20, marginTop: 20, color: '#99b582' }}>Split Wise, Sleep Well !</Text>
        </View>
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#18a582',
    },
    logo: {
        width: 300,
        height: 310,
    },
});