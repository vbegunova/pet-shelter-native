import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./HomeHero.styled";

const HomeHero = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.sectionHero}>
      <View style={styles.heroContainer}>
        <Text style={styles.title}>
          Знайди{"\n"}
          свого{"\n"}
          <Text style={styles.titleAccent}>друга</Text>
        </Text>
        <Text style={styles.heroText}>
          Ласкаво просимо в таємничий світ безмежної любові та вірності
        </Text>
        <Image
          source={require("../../assets/images/hero-image.png")}
          style={styles.heroImage}
        />
      </View>

      <Image
        source={require("../../assets/images/line.png")}
        style={styles.bgLineFirst}
      />
      <Image
        source={require("../../assets/images/line.png")}
        style={styles.bgLineSecond}
      />

      <View style={styles.sectionHelp}>
        <Text style={styles.helpTitle}>Як допомогти?</Text>
        <Text style={styles.helpSubtitle}>
          Є багато способів як допомогти хвостикам Обирай той, який найкраще
          підходить для тебе!
        </Text>
        <View style={styles.helpList}>
          <Text style={styles.helpItem}>Подарувати хвостику дім</Text>
          <Text style={styles.helpItem}>Допомогти речами</Text>
          <Text style={styles.helpItem}>Стати волонтером</Text>
          <Text style={styles.helpItem}>Взяти хвостика під опіку</Text>
        </View>
        <Image
          source={require("../../assets/images/cat.png")}
          style={styles.helpImage}
        />
        <TouchableOpacity
          style={styles.styledLink}
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={styles.styledLinkText}>Дізнатись більше</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHero;
