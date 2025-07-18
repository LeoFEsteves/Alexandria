import {StyleSheet, View, Text } from 'react-native';


export default function BooksScreen() {
  return (
    <View>
      <Text style={styles.title}>BOOKS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#ffffff'
  }
});
