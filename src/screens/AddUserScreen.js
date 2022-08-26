//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const AddUserScreen = (props) => {

    const {setUsers, setInputUser} = props
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [state, setState] = useState('')
    const [image, setImage] = useState('')

    return (
        <View style={styles.container}>
            <Text>Fist Name</Text>
            <TextInput style={styles.inputField} value={firstName} onChangeText={(value) => setFirstname(value)} />
            <Text>Last Name</Text>
            <TextInput style={styles.inputField} value={lastName} onChangeText={(value) => setLastName(value)} />
            <Text>Age</Text>
            <TextInput style={styles.inputField} value={age} onChangeText={(value) => setAge(value)} />
            <Text>Address</Text>
            <TextInput style={styles.inputField} value={address} onChangeText={(value) => setAddress(value)} />
            <Text>Postal Code</Text>
            <TextInput style={styles.inputField} value={postalCode} onChangeText={(value) => setPostalCode(value)} />
            <Text>State</Text>
            <TextInput style={styles.inputField} value={state} onChangeText={(value) => setState(value)} />
            <Text>Image Url</Text>
            <TextInput style={styles.inputField} value={image} onChangeText={(value) => setImage(value)} />
            <TouchableOpacity style={styles.submitButton} onPress={()=> {
                setUsers(prev=> [...(prev || []), {
                    firstName,
                    lastName,
                    age,
                    address: {
                        address,
                        postalCode,
                        state
                    },
                    image
                }])
                setInputUser(false)
            }}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 5,
        width: '80%',
        height: 40
    },
    submitButton: {
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
    }
});

//make this component available to the app
export default AddUserScreen;
