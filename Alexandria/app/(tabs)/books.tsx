import {StyleSheet, View, Text } from 'react-native';
import {FloatingActionButton} from '@/components/ui/FloatingActionButton';
import {Routes} from '@/app/routes'

export default function BooksScreen() {
  return (
    <>
    <View>
      <Text style={styles.title}>BOOKS</Text>
    </View>
    <FloatingActionButton icon_name="add" link={Routes.addBooks}/>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#ffffff'
  }
});
