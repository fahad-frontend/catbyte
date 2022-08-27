//import liraries
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/usersSlice'

// create a component
const UserTile = (props) => {
    const {user, navigation} = props
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={()=> navigation.navigate('UserDetails', {user})} key={user.id} style={styles.container}>
            <Text onPress={()=> dispatch(deleteUser(user))} style={styles.deleteUserText}>x</Text>
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
        backgroundColor: '#2c3e50',
        marginRight: '25%',
        marginLeft: '25%',
        borderRadius: 10
    },
    deleteUserText: {
        color: 'red',
        position: 'absolute',
        fontSize: 20,
        top: 5,
        right: 10
    },
    textInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    userName: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    userAge: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5
    }
});

//make this component available to the app
export default UserTile;
