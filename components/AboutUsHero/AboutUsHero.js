import React from "react";
import { View, Text } from "react-native";

import { styles } from "./AboutUsHero.styled";

const AboutUsHero = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Наша Історія: Любов, Турбота та Зміни</Text>
        <Text style={styles.text}>
          Щасливі хвостики - це не лише мета, а й наша пристрасть. Давайте
          розкажемо вам більше про те, хто ми і чому ми робимо те, що робимо.
        </Text>
        <Text style={styles.secondTitle}>Наша місія</Text>
        <Text style={styles.secondText}>
          Ми зробили своєю метою створити безпечне і щасливе місце для кожного
          бездомного тварини. Наша місія - забезпечити їм не лише притулок, але
          й найкращі умови, де кожен зможе знайти свій дім та отримати безмежну
          любов.
        </Text>
      </View>
    </View>
  );
};

export default AboutUsHero;
