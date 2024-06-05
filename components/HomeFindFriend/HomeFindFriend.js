import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './HomeFindFriend.styled';
import { useNavigation } from '@react-navigation/native';

const HomeFindFriend = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Знайди свого чотирилапого друга</Text>
        <Text style={styles.text}>
          Любов безмежна, а найбільше вона сяє у тих митях, коли ти даруєш її
          іншій живій істоті. У нашому притулку ми віримо в те, що кожен має
          право на щасливе життя та відданого друга. Чекаючі на тебе – це
          безпритульні тварини, які готові до полноцінного життя у гарячо
          люблячому гніздечку.
        </Text>
        <Text style={styles.text}>
          Запрошуємо тебе стати частиною цього чудового процесу – взяти додому
          нового друга, який готовий поділитися своєю радістю та вірністю. Наші
          підопічні готові стати членами твоїї родини, принести в дім радість та
          неповторні миті тепла.
        </Text>
        <Text style={styles.lastText}>
          Прийди та знайди того, кого ти чекаешь. Адопція – це не лише акт
          любові, але і шлях до створення незабутніх спогадів. Разом ми можемо
          змінити життя, один лагідний погляд та щира посмішка назавжди
          залишаться у твоїй душі.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Adoption')}
          >
          <Text style={styles.buttonText}>Підібрати друга</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/images/dog.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default HomeFindFriend;