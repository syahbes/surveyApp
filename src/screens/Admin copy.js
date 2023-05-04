import { StyleSheet, Text, View } from 'react-native'
import { firebase } from '../app/firebase';
import { Button, IconButton, TouchableRipple } from 'react-native-paper';
import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import OutlinesStar from '../icons/OutlinesStar';
import FilledStar from '../icons/FilledStar';



const Admin = () => {
    const [status, setStatus] = React.useState('checked');

    const onButtonToggle = value => {
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };
    const handleLogout = () => {
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
            <View style={{ flexDirection: 'row' }}>

                <ToggleButton
                    icon="bluetooth"
                    value="bluetooth"
                    status={status}
                    onPress={onButtonToggle}
                />
                <ToggleButton
                    icon="bluetooth"
                    value="bluetooth"
                    status={status === 'checked' ? 'unchecked' : 'checked'}
                    onPress={onButtonToggle}
                />
            </View>
            <Button icon="star-outline" size={800}>
                a
            </Button>
            <IconButton icon="star-outline" size={80} onPress={onButtonToggle}>s</IconButton>
            <IconButton icon="star" size={80} iconColor='red' containerColor='black' co onPress={onButtonToggle}>s</IconButton>
            <View style={{ flexDirection: 'row' }}>

                <IconButton icon="star" size={50} iconColor='#ffce29' onPress={onButtonToggle} style={{ marginRight: 0 }}>s</IconButton>
                <IconButton icon="star" size={50} iconColor='#ffce29' onPress={onButtonToggle} style={{ marginRight: 0 }}>s</IconButton>
                <IconButton icon="star" size={50} iconColor='#ffce29' onPress={onButtonToggle} style={{ marginRight: 0 }}>s</IconButton>
                <IconButton icon="star" size={50} iconColor='#000' onPress={onButtonToggle} style={{ marginRight: 0 }}>s</IconButton>
                <IconButton icon="star" size={50} iconColor='#000' onPress={onButtonToggle} style={{ marginRight: 0 }}>s</IconButton>


            </View>
            <View style={{ flexDirection: 'row' }}>
                <FilledStar />
                <FilledStar />
                <FilledStar />
                <TouchableRipple>
                    <OutlinesStar />
                </TouchableRipple>
                <TouchableRipple onPress={() => console.log("Pressed")} style={{borderRadius:50 , padding: 8}} rippleColor='rgba(255, 206, 41, 0.2)'>
                    <OutlinesStar />
                </TouchableRipple>
            </View>



        </View>
    )
}
export default Admin
const styles = StyleSheet.create({})