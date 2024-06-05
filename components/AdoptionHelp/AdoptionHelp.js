import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./AdoptionHelp.styled";
import { useNavigation } from "@react-navigation/native";

const AdoptionHelp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Хочете допомогти?</Text>
          <Text style={styles.subtitle}>
            Є багато способів як допомогти хвостикам. Обирай той, який найкраще
            підходить для тебе.
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.item}>Подарувати хвостику дім.</Text>
          <Text style={styles.item}>Взяти хвостика під опіку.</Text>
          <Text style={styles.item}>Допомогти речами.</Text>
          <Text style={styles.item}>Стати волонтером.</Text>
        </View>
        <TouchableOpacity
          style={styles.moreBtn}
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={styles.moreBtnText}>Дізнатись більше</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdoptionHelp;
