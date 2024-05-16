import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native"; // Make sure to set up React Navigation in your project
import { styles } from "./CheckListNeedToKnow.styled";

const CheckListNeedToKnow = () => {
  // const navigation = useNavigation(); // Using React Navigation for navigation

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Хочу допомогти!</Text>
        <View>
          <View style={styles.imageBox}>
            <Image
              source={require("../../assets/images/check-list-help.png")} // Use local or network image
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
              // onPress={() => navigation.navigate("Help")} // Adjust the route name according to your configuration
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
