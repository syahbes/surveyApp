import { StyleSheet, Text, View } from 'react-native'
import {  ProgressBar } from 'react-native-paper'

const sumValues = (obj) => {
    return [1, 2, 3, 4, 5].reduce((total, key) => total + (obj[key] || 0), 0);
};
const calculateRating = (obj) => {
    let numerator = 0;
    let denominator = 0;
    [1, 2, 3, 4, 5].forEach((stars) => {
        const count = obj[stars] || 0;
        numerator += stars * count;
        denominator += count;
    });
    return denominator === 0 ? 0 : numerator / denominator;
};


const RatingStats = ({ data }) => {
    const total = sumValues(data);
    const rating = calculateRating(data).toFixed(1);

    const rows = [5, 4, 3, 2, 1].map((stars) => {
        const count = data[stars];
        const progress = count / total;
        return (
            <View key={stars} style={styles.row}>
                <Text>{stars} Stars - {count}</Text>
                <ProgressBar progress={progress} style={{ height: 8, marginTop: 5 }} />
            </View>
        )
    });

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>Ratings</Text>
                <Text style={styles.text}>⭐{rating} ({total} rating)</Text>
            </View>
            {rows}
        </View>
    );
};

export default RatingStats
const styles = StyleSheet.create({
    container: { width: '100%', backgroundColor: '#6667ab', borderRadius: 20, padding: 10 },
    title: { width: '100%', backgroundColor: '#6667ab', borderRadius: 20, padding: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' },
    text: { color: '#fff' },
    row: { marginBottom: 10, width: '100%', backgroundColor: '#fff', borderRadius: 20, padding: 10 },
})