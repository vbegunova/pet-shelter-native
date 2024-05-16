import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./AboutUsHelp.styled";

const AboutUsHelp = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Хочете допомогти?</Text>
        <Text style={styles.firstText}>
          Діліться з нами магічними моментами, коли найменший крок призводить до
          найбільшого щастя. Наші перемоги - це історії дружби та надії, які
          залишають невиліковні сліди в серцях наших тварин та нашої спільноти.
        </Text>
        <Text style={styles.text}>
          Це наша історія, наповнена любов'ю, підтримкою та змінами.
          Приєднуйтеся до нас на цьому неймовірному шляху, де кожен може стати
          частиною чогось більшого - історії, яка залишить невимовне враження в
          душах тих, кому ми служимо.
        </Text>
        <TouchableOpacity style={styles.styledLink} onPress={() => {}}>
          <Text style={styles.linkText}>Зв’язатись з нами</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/check-list-cat.png")}
      />
    </View>
  );
};

export default AboutUsHelp;
