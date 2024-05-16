import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./FindFriend.styled";
import PetItem from "../PetItem";

// Імпортуйте globalColors замість імпорту з Styled/GlobalColors
// import globalColors from '../../Styled/GlobalColors';

const FindFriend = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Знайти друга</Text>
        <View style={styles.list}>
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
          <PetItem />
        </View>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => console.log("More button pressed")}
        >
          <Text style={styles.moreButtonText}>Усі хвостики</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindFriend;
