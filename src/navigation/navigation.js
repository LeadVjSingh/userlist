import { React, useEffect } from 'react'
import { fetchUser, selectAll } from '../../src/stores/user.reducer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home/Home.screen'
import { useDispatch, useSelector } from 'react-redux'
import Profile1 from '../screens/Profile1'
const Stack = createNativeStackNavigator()

const MainNavigation = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser());
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
