import React, {  useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { fbSignOut } from '../../app/firebase'
import { setLoading } from '../../features/userSlice'
import CustomListAccordion from '../../components/CustomListAccordion';
import { selectQuestions } from '../../features/questionsSlice';


const AdminEdit = () => {
  const dispatch = useDispatch()
  const questions = useSelector(selectQuestions);

  const handleLogout = useCallback(() => {
    dispatch(setLoading(true))
    fbSignOut()
  }, [dispatch])

  useEffect(() => {
    return () => {
      dispatch(setLoading(false))
    }
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} >
        <List.Section title="Survey Questions" >
          {questions.map(item => (<CustomListAccordion item={item} key={item.id} />))}
        </List.Section>

      </ScrollView>
       <View style={styles.footer}>
        <Button icon={'plus'} mode='outlined' onPress={handleLogout}>Add New</Button>
       <Button icon={'logout'} mode='outlined'  onPress={handleLogout}>Logout</Button>
       </View>
    </SafeAreaView>
  )
}

export default AdminEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  }
});
