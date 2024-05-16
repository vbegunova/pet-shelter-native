import React from "react";
import { View, Text } from "react-native";

import { styles } from "./AboutUsGoals.styled";

const AboutUsGoals = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Цілі, що творять зміни</Text>
        <View style={styles.box}>
          <Text style={styles.subtitle}>
            Разом ми створюємо краще майбутнє для тварин, де кожен чотирилапий
            друг може знайти своє щасливе та безпечне місце під сонцем. Ми
            прагнемо до:
          </Text>
          <View style={styles.list}>
            <View style={styles.fullItem}>
              <Text style={styles.number}>1.</Text>
              <Text style={styles.item}>
                Безпечної країни для тварин - створення країни, де відсутні
                безпритульні тварини. Ми віримо, що кожен хвостик заслуговує на
                теплий дім та безмежну любов.
              </Text>
            </View>
            <View style={styles.fullItem}>
              <Text style={styles.number}>2.</Text>
              <Text style={styles.item}>
                Культури відповідального ставлення - формування культури серед
                наших співвітчизників, яка визначатиметься відповідальністю та
                повагою до чотирилапих друзів. Разом із вами, ми виховуємо
                свідомих громадян, готових допомагати тим, хто потребує захисту.
              </Text>
            </View>
            <View style={styles.fullItem}>
              <Text style={styles.number}>3.</Text>
              <Text style={styles.item}>
                Тимчасового прихистку для тварин - зробити наш притулок
                тимчасовим домом, де кожна тварина відчуває тепло, захист та
                можливість знайти постійний господарський дім.
              </Text>
            </View>
            <View style={styles.fullItem}>
              <Text style={styles.number}>4.</Text>
              <Text style={styles.item}>
                Розповсюдження відповідальності - поширювати усвідомленість про
                відповідальне ставлення до тварин. Відповідальність несе кожен,
                і ми впевнені, що з вашою підтримкою ми зможемо досягти наших
                цілей.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutUsGoals;
