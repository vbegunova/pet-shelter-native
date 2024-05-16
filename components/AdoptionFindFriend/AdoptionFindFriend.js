import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './AdoptionFindFriend.styled';
import PetItem from '../PetItem'

const AdoptionFindFriend = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Знайти друга</Text>
          <View style={styles.list}>
            <PetItem />
            <PetItem />
            <PetItem />
            <PetItem />
            <PetItem />
            <PetItem />
          </View>
          <TouchableOpacity style={styles.moreButton} onPress={() => console.log("Усі хвостики")}>
            <Text style={styles.moreButtonText}>
              Усі хвостики
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdoptionFindFriend;