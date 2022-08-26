/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
} from 'react-native'
import UserListScreen from './src/screens/UserListScreen'
import UserDetailsScreen from './src/screens/UserDetailsScreen'
import AddUserScreen from './src/screens/AddUserScreen'

const App = () => {

  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [inputUser, setInputUser] = useState(false)
  const getUsers = async () => {
    const response = await fetch('https://dummyjson.com/users')
    const usersResponse = await response.json()
    setUsers(usersResponse.users)
  }

  useEffect(()=> {
    getUsers()
  }, [])

  return (
    <>
      {inputUser ? <AddUserScreen setInputUser={setInputUser} setUsers={setUsers}/> :  selectedUser ? <UserDetailsScreen user={selectedUser} setUser={setSelectedUser}  /> : <UserListScreen setInputUser={setInputUser} users={users} setSelectedUser={setSelectedUser} />}
    </>
  );
};

const styles = StyleSheet.create({
  
})

export default App;
