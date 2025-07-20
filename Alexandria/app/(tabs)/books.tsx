import {StyleSheet, View, Text } from 'react-native';
import {FloatingActionButton} from '@/components/ui/FloatingActionButton';

export default function BooksScreen() {
  return (
    <>
    <View>
      <Text style={styles.title}>BOOKS</Text>
    </View>
    <FloatingActionButton icon_name="add" />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#ffffff'
  }
});
