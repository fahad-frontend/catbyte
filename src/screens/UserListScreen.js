//import liraries
import React, { useEffect } from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { populateUsers } from '../redux/usersSlice'
import UserTile from '../components/UserTile'
import AsyncStorage from '@react-native-async-storage/async-storage'

// create a component
const UserListScreen = ({navigation}) => {
    const {users} = useSelector(state=> state.users)
    const dispatch = useDispatch()
    const getUsers = async () => {
        AsyncStorage.getItem('users').then(async val=> {
            const asyncStorageUsers = JSON.parse(val)
            if (asyncStorageUsers?.length>0){
                console.log('asyncstorage')
                dispatch(populateUsers(asyncStorageUsers))
            } else {
                console.log('first fetch')
                const response = await fetch('https://dummyjson.com/users')
                const usersResponse = await response.json()
                dispatch(populateUsers(usersResponse.users))
                
            }
        })
    }

    useEffect(()=> {
        users.length===0 && getUsers()
    }, [])

    return (
        <ScrollView>
            {users.length>0 && 
            <>
                {users.map((user, index)=> <UserTile key={index} user={user} navigation={navigation}/>)}
                <TouchableOpacity onPress={()=> navigation.navigate('AddUser')} style={styles.addUserButton}>
                    <Text style={styles.addUserText}>Add User</Text>
                </TouchableOpacity>
            </>}
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
