import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./CheckListSection.styled";
import { useNavigation } from "@react-navigation/native";

const CheckListSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Чек-ліст відповідальної адопції хвостика</Text>
      <View style={styles.imageBox}>
        <Image source={require("../../assets/images/check-list-cat.png")} />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.subtitle}>
          Перш ніж приймати рішення, будь відповідальним та ознайомся з
          установленими правилами
        </Text>
        <View style={styles.fullItem}>
          <Text style={styles.number}>1.</Text>
          <Text style={styles.item}>
            Ознайомся з анкетами та обери того самого пухнастого друга
          </Text>
        </View>
        <View style={styles.fullItem}>
          <Text style={styles.number}>2.</Text>
          <Text style={styles.item}>Зв’яжіться з нами і пройдіть інтерв’ю</Text>
        </View>
        <View style={styles.fullItem}>
          <Text style={styles.number}>3.</Text>
          <Text style={styles.item}>
            Узгодьте з нами день і час вашого візиту, щоб хвостик міг
            підготуватися до вашоїї зустрічі
          </Text>
        </View>
        <View style={styles.fullItem}>
          <Text style={styles.number}>4.</Text>
          <Text style={styles.item}>
            В день "Х" не забудьте взяти з собою паспорт та гарний настрій для
            підписання договору. Для котиків рекомендується мати переноску, а
            для песиків - повідок.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CheckList')}
        >
          <Text style={styles.buttonText}>Детальніше</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckListSection;
