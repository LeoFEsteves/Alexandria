import { StyleSheet, View, Text } from 'react-native';

export default function AnalyticsScreen() {
  return (
    <View>
      <Text style={styles.title}>ANALYTICS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#ffffff'
  }
});
