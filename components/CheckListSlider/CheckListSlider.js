import react from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./CheckListSlider.styled";

const CheckListSlider = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Що потрібно знати?</Text>
        <Swiper
          showsPagination={false}
          loop={false}
          style={styles.swiper}
          showsButtons={true}
          buttonWrapperStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 230,
            left: 0,
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            gap: 10,
            alignItems: "center",
          }}
          nextButton={
            <View style={styles.nextButton}>
              <Image
                source={require("../../assets/images/next-button-mobile.png")}
              />
            </View>
          }
          prevButton={
            <View style={styles.prevButton}>
              <Image
                source={require("../../assets/images/prev-button-mobile.png")}
              />
            </View>
          }
        >
          <View style={styles.slide}>
            <Text style={styles.text}>
              Тварини не віддаються без попереднього проходження інтерв’ю та
              узгодження дати і часу приїзду з менеджером по адопції/директоркою
              притулку. Для цього зателефонуй за тел. +38 (066) 345 67 89, якщо
              хочеш взяти котика або собачку.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Інтерв'ю є обов'язковим етапом процесу адопції. Менеджер задасть
              тобі питання, відповіді на які допоможуть зрозуміти твою
              готовність до появи нового члена сім'ї, а також ви отримаєте
              відповіді на ваші питання, дізнаєтеся більше про тварин та
              отримаєте консультацію щодо догляду.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Менеджер по адопції має право відмовити вам у прийнятті тварини,
              якщо вважає, що для цього є об'єктивні підстави. Ми дбаємо про
              безпеку та комфорт тварин, тому важливо, щоб вони потрапили до
              відповідальних власників.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Менеджер по адопції доступний для зв'язку з 10 до 19 години. Будь
              ласка, врахуйте цей час для планування вашого візиту та інтерв'ю.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Ви можете заздалегідь переглянути анкети тварин на нашому сайті
              або звернутися до менеджера за порадою
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Ми укладаємо договір про передачу з кожним власником. Менеджер
              може надіслати вам договір для попереднього ознайомлення перед
              підписанням.
            </Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default CheckListSlider;
