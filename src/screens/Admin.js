import { StyleSheet, Text, View } from 'react-native'
import { firebase } from '../app/firebase';
import { Button } from 'react-native-paper';
const Admin = () => {
    const handleLogout = () =>{
        firebase.auth().signOut().then(() => {
        console.log("Sign-out successful.")
      }).catch((error) => {
        console.log(error)
      });
      }

    return (
        <View>
            <Text>Admin</Text>
            <Button onPress={handleLogout} mode="contained">
                Logout
            </Button>
        </View>
    )
}
export default Admin
const styles = StyleSheet.create({})