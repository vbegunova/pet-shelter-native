import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HelpVolunteer from "../../components/HelpVolunteer";
import { styles } from "./HelpPresentSection.styled";

const HelpPresentSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Подарувати{"\n"} хвостику{"\n"} дім
        </Text>
        <View style={styles.textBox}>
          <View style={styles.box}>
            <Text style={styles.subtitle}>Зателефонуйте нам!</Text>
            <TouchableOpacity style={styles.styledLink}>
              <Text style={styles.linkText}>+38 (066) 345 67 89</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            Відчуйте радість і щастя, яке приносить новий дом, адоптуючи
            безпритульного улюбленця. У нас є безліч тварин, які шукають люблячі
            руки та теплий дім, і одна з них може стати вашим найкращим другом
            на все життя. Адопція тварини - це не лише акт милосердя, а й
            можливість змінити світ і своє власне життя. Кожен безпритульний
            улюбленець має свою унікальну історію та особистість, і він готовий
            подарувати вам безмежну любов і відданість. Запрошуємо вас знайти
            свого нового друга серед наших чотирилапих улюбленців і подарувати
            йому той дім, який він заслуговує. Дозвольте собі стати частиною
            цієї надзвичайної подорожі і змінити світ одним улюбленцем за раз!
          </Text>
        </View>
        <HelpVolunteer />
      </View>
    </View>
  );
};

export default HelpPresentSection;
