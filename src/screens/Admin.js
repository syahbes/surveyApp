import { StyleSheet, Text, View } from 'react-native'
import { fbSignOut } from '../app/firebase';
import { Button } from 'react-native-paper';
const Admin = () => {
    const handleLogout = () => {
        fbSignOut();
    };

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