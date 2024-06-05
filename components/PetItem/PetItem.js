import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./PetItem.styled";
import { useNavigation } from "@react-navigation/native";

const PetItem = ({ id, name, sex, age }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{sex === 'Жіноча' ? 'Дівчинка' : 'Хлопчик'}, {age}</Text>
      <TouchableOpacity
        style={styles.styledLink}
        onPress={() => navigation.navigate("PetPage", {
          petId: id,
        })}
      >
        <Text style={styles.styledLinkText}>Усиновити</Text>
        {/* <SvgUri uri={`${sprite}#icon-paw`} style={styles.linkIcon} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default PetItem;
