import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./GrantLove.styled";

const GrantLove = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Даруй любов: Прихисти нового члена родини
        </Text>
        <View style={styles.box}>
          <Text style={styles.firstText}>
            Любов безмежна, а найбільше вона сяє у тих митях, коли ти даруєш її
            іншій живій істоті. У нашому притулку ми віримо в те, що кожен має
            право на щасливе життя та відданого друга. Чекаючі на тебе – це
            безпритульні тварини, які готові до полноцінного життя у гарячо
            люблячому гніздечку.
          </Text>
          <Text style={styles.firstText}>
            Запрошуємо тебе стати частиною цього чудового процесу – взяти додому
            нового друга, який готовий поділитися своєю радістю та вірністю.
            Наші підопічні готові стати членами твоєї родини, принести в дім
            радість та неповторні миті тепла.
          </Text>
          <Text style={styles.text}>
            Прийди та знайди того, кого ти чекаєш. Адопція – це не лише акт
            любові, але і шлях до створення незабутніх спогадів. Разом ми можемо
            змінити життя, один лагідний погляд та щира посмішка назавжди
            залишаться у твоїй душі.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Заповнити заявку</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/images/dog-walking.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default GrantLove;
