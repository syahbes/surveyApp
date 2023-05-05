import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const ChartBar = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  }

  const chartConfig = {
    backgroundColor: "#000",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    formatXLabel: (label) => label.substring(0, 3) // customize the formatting of the x-axis labels
  }

  const screenWidth = Dimensions.get('window').width

  return (
    <View>
      <BarChart
        style={{ columnGap: 20 }}
        data={data}
        width={screenWidth}
        height={320}
        yAxisLabel="number"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  )
}

export default ChartBar
const styles = StyleSheet.create({})
