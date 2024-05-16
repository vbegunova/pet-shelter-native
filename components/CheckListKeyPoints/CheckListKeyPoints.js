import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./CheckListKeyPoints.styled";

const CheckListKeyPoints = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Ключові пункти{"\n"}
          для уваги
        </Text>
        <View>
          <View style={styles.leftBox}>
            <Text style={styles.leftText}>
              Усі тварини від 6 місяців - стерилізовані. Цуценята та кошенята
              віддаються тільки з умовою обов’язкою стерилізації після 6
              місяців.
            </Text>
            <Text style={styles.leftText}>
              Ми не віддаємо тварин третім особам, на подарунки, а також для
              охорони підприємств.
            </Text>
            <TouchableOpacity style={styles.styledLink}>
              <Text style={styles.styledLinkText}>Перейти до підбору хвостика</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/images/sitting-dog.png")}
            style={styles.image}
          />
          <View style={styles.rightBox}>
            <Text style={styles.text}>
              За хвостиком потрібно буде приїхати в притулок особисто. Випадки
              передачі тварин не на території притулку обговорюються в
              індивідуальному порядку. Також як і прилаштування тварин за межами
              Харківської області.
            </Text>
            <Text style={styles.text}>
              Якщо ви їдете за котиком, наявність переноски є обов’язковою. Якщо
              за песиком, наявність нашийника і повідка є обов’язковою.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckListKeyPoints;
