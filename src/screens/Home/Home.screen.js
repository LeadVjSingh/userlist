import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UsersScreen from '../Profile/UsersScreen';

const Home = ({ navigation }) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Users"
        component={UsersScreen}
        options={{
          title: 'All Users',
          drawerIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}


const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Home
