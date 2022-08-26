//import liraries
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
const UserDetailsScreen = (props) => {
    const {user, setUser} = props
    const address = user.address
    console.log(user)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>USER DETAILS</Text>
            <Image source={{uri: user.image}} style={styles.userImage} />
            <Text style={styles.addressDetails}>Name: {user.firstName+' '+user.lastName}</Text>
            <Text style={styles.addressDetails}>Age: {user.age}</Text>
            <Text style={styles.addressDetails}>Company Details: {address.address+', '+address.postalCode+', '+address.state}</Text>
            <TouchableOpacity onPress={()=> setUser(null)} style={styles.backButton}>
                <Text style={styles.backButtonText}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
};

// age and company details (address, postal code, state).

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    userImage: {
        width: 200, 
        height: 200,
        marginBottom: 10
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    addressDetails: {
        fontSize: 15,
        color: '#ffffff',
        margin: 5
    },
    backButton: {
        padding: 10,
        backgroundColor: '#FF8C88',
        borderColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 3,
        marginTop: 20
    },  
    backButtonText: {
        fontSize: 20,
        color: '#ffffff'
    }
});

//make this component available to the app
export default UserDetailsScreen;
