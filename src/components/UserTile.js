//import liraries
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

// create a component
const UserTile = (props) => {
    const {user, setUser} = props
    return (
        <TouchableOpacity onPress={()=> setUser(user)} key={user.id} style={styles.container}>
            <Image source={{uri: user.image}} style={{width: 100, height: 100}} />
            <View style={styles.textInfo}>
                <Text style={styles.userName}>{user.firstName+' '+user.lastName}</Text>
                <Text style={styles.userAge}>{user.age}</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    textInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userAge: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5
    }
});

//make this component available to the app
export default UserTile;
