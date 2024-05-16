import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import sprite from '../../images/sprite.png'; // Перетворити SVG на PNG або використати іншу бібліотеку для іконок
import { styles } from "./HelpVolunteer.styled";

const HelpVolunteer = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Стати волонтером</Text>
      <Text style={styles.text}>
        Бажаєте допомогти тим, хто потребує нашої підтримки найбільше? Стати
        волонтером для безпритульних тварин - це чудова можливість внести свій
        внесок у рятування та покращення життя тварин, які потрапили у складну
        життєву ситуацію. Наші волонтери - це серце нашої спільноти, які готові
        віддати свій час та енергію, щоб забезпечити безпечне та щасливе
        майбутнє для кожного бездомного улюбленця. Ваша підтримка може врятувати
        життя і змінити долю тварин, а також сприяти побудові кращого світу для
        всіх нас. Долучайтеся до нашої команди волонтерів сьогодні та станьте
        частиною позитивних змін у житті безпритульних тварин!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Заповнити заявку</Text>
      </TouchableOpacity>
      <Image source={require("../../assets/images/paw.png")} style={styles.icon} />
    </View>
  );
};

export default HelpVolunteer;