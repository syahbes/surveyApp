import { StyleSheet, Text, View } from 'react-native'
const SurveyCard = (props) => {
    console.log("🚀 ~ file: SurveyCard.js:3 ~ SurveyCard ~ props:", props)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}
export default SurveyCard
const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor: 'red'
    },
    text : {
        fontSize: 20,
    }
})