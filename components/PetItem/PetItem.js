import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './PetItem.styled';

const PetItem = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>Тоша</Text>
      <Text style={styles.info}>Хлопчик, 3 роки</Text>
      <TouchableOpacity style={styles.styledLink} onPress={() => console.log('Button pressed')}>
        <Text style={styles.styledLinkText}>Усиновити</Text>
        {/* <SvgUri uri={`${sprite}#icon-paw`} style={styles.linkIcon} /> */}
      </TouchableOpacity>
    </View>
  )
};



export default PetItem;
