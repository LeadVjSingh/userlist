import { FlatList } from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../stores/user.reducer'
import UserGridTile from '../../components/UserGridTile';
import React, { useEffect } from 'react'

// import { CATEGORIES } from '../data/dummy-data';

function UsersScreen({ navigation }) {
  const users = useSelector(selectAll)
  const dispatch = useDispatch()





  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Profile', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <UserGridTile
        title={itemData.item.name}
        email={itemData.item.email}
        onPress={pressHandler}
      />
    );
  }
  console.log("users-->", users)
  return (

    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={1}
    />
  );
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default UsersScreen;
