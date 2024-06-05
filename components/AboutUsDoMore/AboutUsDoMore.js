import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./AboutUsDoMore.styled";
import { useNavigation } from "@react-navigation/native";

const AboutUsDoMore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Разом ми можемо більше</Text>
        <View style={styles.box}>
          <View>
            <Text style={styles.subtitle}>
              Кожен може долучитися до нашої місії. Ваш внесок, чи то
              фінансовий, чи то волонтерський, робить реальну різницю в житті
              бездомних тварин. Разом ми можемо зробити більше щасливих
              хвостиків.
            </Text>
            <View style={styles.list}>
              <Text style={styles.item}>Подарувати хвостику дім</Text>
              <Text style={styles.item}>Допомогти речами</Text>
              <Text style={styles.item}>Стати волонтером</Text>
              <Text style={styles.item}>Взяти хвостика під опіку</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help')}>
              <Text style={styles.buttonText}>Дізнатись більше</Text>
            </TouchableOpacity>
            <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={require("../../assets/images/spread-love.png")}
            />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutUsDoMore;
