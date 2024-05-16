import React from "react";
import { View, Text, Image } from "react-native";
// import CheckListProfile from "../CheckListProfile";
import { styles } from "./CheckListHero.styled";
import CheckListProfile from "../CheckListProfile";

const CheckListHero = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Правила
          {"\n"}
          адопції
        </Text>
        <Text style={styles.text}>
          Якщо ви мрієте подарувати дім чотирилапому другу, вам слід
          ознайомитися з основними правилами.
        </Text>
        <Image source={require('../../assets/images/friends.png')} style={styles.image} />
        <CheckListProfile />
      </View>
    </View>
  );
};

export default CheckListHero;
