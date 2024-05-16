import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./AboutUsFamily.styled";

const AboutUsFamily = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Наша сім'я</Text>
        <View style={styles.box}>
          <Text style={styles.text}>
            Безкінечна праця нашої команди та волонтерів створює серце та душу
            нашого притулку. Кожен член команди приносить унікальні навички та
            тепло свого серця, будуючи не просто притулок, але й справжню родину
            для наших безпритульних тварин.
          </Text>
          <Text style={styles.secondText}>
            Наш успіх - це спільний результат. Ми вдячні нашим партнерам та
            активній спільноті, які разом з нами творять позитивні зміни в житті
            наших пухнастих друзів. Разом ми створюємо сім'ю, в якій кожен може
            знайти не лише прихисток, але і безмежну любов та турботу.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutUsFamily;
