import React from "react";
import { View, Text } from "react-native";
import { styles } from "./NewsSection.styled";

const NewsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Новини</Text>
        <View style={styles.list}>
          <View>
            <Text style={styles.itemTitle}>
              Який корм найкращий для вашого улюбленця?
            </Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>
              Кращий нашийник для вашого улюбленця
            </Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>
              Кішка вистрибнула з 15 поверху, але залишилася жива
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewsSection;
