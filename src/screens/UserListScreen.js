//import liraries
import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import UserTile from '../components/UserTile'

// create a component
const UserListScreen = (props) => {
    const {users, setSelectedUser, setInputUser} = props
    return (
        <ScrollView>
            {users.length>0 && users.map((user, index)=> <UserTile key={index} setUser={setSelectedUser} user={user} />)}
            <TouchableOpacity onPress={()=> setInputUser(true)} style={styles.addUserButton}>
                <Text style={styles.addUserText}>Add User</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

// define your styles
const styles = StyleSheet.create({
    addUserButton: {
        padding: 10,
        backgroundColor: '#FF8C88',
        borderColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 3,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 50
    },
    addUserText: {
        fontSize: 20,
        color: '#ffffff'
    }
});

//make this component available to the app
export default UserListScreen;
