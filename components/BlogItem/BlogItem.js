import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./BlogItem.styled";

const BlogItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>
        Який корм накращий для вашого улюбленця?
      </Text>
      <TouchableOpacity
        style={styles.moreBtn}
        onPress={() => console.log("Button pressed")}
      >
        <Text style={styles.moreBtnText}>Читати допис</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlogItem;
