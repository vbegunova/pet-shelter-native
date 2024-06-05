import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CheckListNeedToKnow.styled";

const CheckListNeedToKnow = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Хочу допомогти!</Text>
        <View>
          <View style={styles.imageBox}>
            <Image
              source={require("../../assets/images/check-list-help.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text}>
              Є багато способів як допомогти хвостикам. Обирай той, який
              найкраще підходить для тебе.
            </Text>
            <View style={styles.list}>
              <Text style={styles.item}>Подарувати хвостику дім.</Text>
              <Text style={styles.item}>Допомогти речами.</Text>
              <Text style={styles.item}>Стати волонтером.</Text>
              <Text style={styles.item}>Взяти хвостика під опіку.</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Help")} 
            >
              <Text style={styles.buttonText}>Дізнатись більше</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckListNeedToKnow;
