import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import sprite from '../../images/sprite.svg'; // Потрібен спеціальний loader або перевести в PNG/JPG
import { styles } from "./HelpHero.styled";

const HelpHero = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Як ти можеш допомогти?</Text>
        <Text style={styles.subtitle}>
          Лише декілька клацань, і хвостики засяяють щасливим світлом.
          Приєднуйтесь до нас у підтримці тварин!
        </Text>
        <View style={styles.list}>
          <Text style={styles.item}>Подарувати хвостику дім</Text>
          <Text style={styles.item}>Допомогти речами</Text>
          <Text style={styles.item}>Стати волонтером</Text>
          <Text style={styles.item}>Взяти хвостика під опіку</Text>
        </View>
        <Image
          source={require("../../assets/images/hero-image.png")}
          style={styles.heroImage}
        />
      </View>
    </View>
  );
};

export default HelpHero;
