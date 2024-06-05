import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./FindFriend.styled";
import PetItem from "../PetItem";
import { useNavigation } from "@react-navigation/native";
import { fetchCats } from "../../services/api";

const FindFriend = () => {
  const navigation = useNavigation();
  const [cats, setCats] = useState([]);
  const limit = 3;

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCats(limit);
        setCats(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Знайти друга</Text>
        <View style={styles.list}>
          {cats.map(({ _id, name, sex, age }) => {
            return (
              <PetItem key={_id} id={_id} name={name} sex={sex} age={age} />
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => navigation.navigate("Adoption")}
        >
          <Text style={styles.moreButtonText}>Усі хвостики</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindFriend;
