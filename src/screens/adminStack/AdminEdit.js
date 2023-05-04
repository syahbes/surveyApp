import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import { firebase } from '../../app/firebase';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../features/userSlice';

const AdminEdit = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLoading(true));
    firebase.auth().signOut().then(() => {
      console.log("Sign-out successful.")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <View>
      <Text>AdminEdit</Text>
      <Button onPress={handleLogout} mode="contained">Logout</Button>
    </View>
  )
}
export default AdminEdit
const styles = StyleSheet.create({})