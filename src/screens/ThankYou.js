import { StyleSheet, Text, View } from 'react-native'
const ThankYou = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank You for the feedback</Text>
      <Text style={styles.text}>✨⭐❤️⭐✨</Text>
    </View>
  )
}
export default ThankYou
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text :{
    fontSize: 20,
    fontWeight: 'bold',

  }
})