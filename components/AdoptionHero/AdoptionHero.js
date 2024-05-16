import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './AdoptionHero.styled';
import CheckListSection from '../CheckListSection';

const AdoptionHero = () => {
  return (
    <View style={styles.section}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Любов на чотирьох лапах: Змініть своє життя, прихистивши нового друга
      </Text>
      <Text style={styles.text}>
        Ласкаво просимо до нашого світу, де кожен маленький хвостик має
        історію чекання на своє щасливе життя. У нашій програмі адопції ви не
        лише знайдете вірного компаньйона, але й відкриєте для себе безмежну
        радість і любов, яку може подарувати бездомний улюбленець. Оберіть
        адопцію, і дайте хвостатому другові новий початок – наповнений теплом,
        відданістю та безмежною радістю вашого серця.
      </Text>
    </View>
    <View style={styles.checkListContainer}>
      <CheckListSection />
    </View>
  </View>
  );
};

export default AdoptionHero;