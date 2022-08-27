import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddUserScreen from '../screens/AddUserScreen'
import UserDetailsScreen from '../screens/UserDetailsScreen'
import UserListScreen from '../screens/UserListScreen'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const Routes = () => {

    const {users} = useSelector(state=> state.users)
    
    useEffect(()=> {
        AsyncStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='UsersList' component={UserListScreen} options={{header: () => null}}/>
                <Stack.Screen name='UserDetails' component={UserDetailsScreen} options={{header: () => null}}/>
                <Stack.Screen name='AddUser' component={AddUserScreen} options={{header: () => null}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;