import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button } from 'react-native-paper'
import { fbSignOut } from '../../app/firebase'
import { setLoading } from '../../features/userSlice'

const AdminEdit = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(setLoading(true))
        fbSignOut()
    }
  return (
    <View>
      <Text>AdminEdit</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  )
}
export default AdminEdit
const styles = StyleSheet.create({})