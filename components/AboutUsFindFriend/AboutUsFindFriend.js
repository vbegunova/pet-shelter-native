import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from "./AboutUsFindFriend.styled";
import { useNavigation } from "@react-navigation/native";

const AboutUsFindFriend = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Знайди свого чотирилапого друга</Text>
        <Text style={styles.firstText}>
          Любов безмежна, а найбільше вона сяє у тих митях, коли ти даруєш її
          іншій живій істоті. У нашому притулку ми віримо в те, що кожен має
          право на щасливе життя та відданого друга. Чекаючі на тебе – це
          безпритульні тварини, які готові до полноцінного життя.
        </Text>
        <Text style={styles.firstText}>
          Запрошуємо тебе стати частиною цього чудового процесу – взяти додому
          нового друга, який готовий поділитися своєю радістю та вірністю. Наші
          підопічні готові стати членами твоєї родини, принести в дім радість та
          неповторні миті тепла.
        </Text>
        <Text style={styles.text}>
          Прийди та знайди того, кого ти чекаєш. Адопція – це не лише акт
          любові, але і шлях до створення незабутніх спогадів. Разом ми можемо
          змінити життя, один лагідний погляд та щира посмішка назавжди
          залишаться з тобою.
        </Text>
        <TouchableOpacity
          style={styles.styledLink}
          onPress={() => navigation.navigate("Adoption")}
        >
          <Text style={styles.linkText}>Підібрати друга</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../../assets/images/dog-walking-2.png")}
        />
      </View>
    </View>
  );
};

export default AboutUsFindFriend;
