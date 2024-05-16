import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './BlogSection.styled';
import BlogItem from '../BlogItem/BlogItem';

const BlogSection = () => {
  return (
    <ScrollView contentContainerStyle={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Наш блог</Text>
        <View style={styles.list}>
          <BlogItem />
          <BlogItem />
        </View>
        <TouchableOpacity style={styles.moreBtn} onPress={() => console.log('Button pressed')}>
          <Text style={styles.moreBtnText}>Подивитись більше</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default BlogSection;