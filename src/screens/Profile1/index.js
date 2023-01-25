import React from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import { selectAll } from '../../../src/stores/user.reducer'

function ProfileScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const users = useSelector(selectAll)
  const selectedUser = users.filter((user) => {
    return user.id === catId;
  });
  return <Profile {...selectedUser[0]} />;
}

export default ProfileScreen;
