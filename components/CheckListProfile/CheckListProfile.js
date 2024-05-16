import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./CheckListProfile.styled";

const CheckListProfile = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Профіль ідеального{"\n"}опікуна</Text>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Відданий догляду та готовий надати безмежну любов своєму новому
            улюбленцю · Здатний взяти на себе відповідальність за забезпечення
            всебічного догляду та безпеки тварини · Маєш достатньо часу та
            енергії для створення активного та щасливого життя для тварини ·
            Розумієш, що адопція тварини - це довгострокове зобов'язання та
            готовий прийняти всі відповідальність за свого нового улюбленця.
          </Text>
          <Text style={styles.secondText}>
            Якщо ці якості описують вас, то вам точно до нас!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CheckListProfile;
