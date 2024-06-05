import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './PetPage.styled';
import { fetchOnePet } from '../../services/api';

const PetInfo = () => {
  const route = useRoute();
  const { petId } = route.params;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchOnePet(petId);
        setData(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [petId]);

  const { name, sex, age, breed, color } = data;

  return (
    <ScrollView style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: data.image }} />
          <View style={styles.box}>
            <Image style={styles.secondImage} source={{ uri: data.secondImage }} />
            <TouchableOpacity style={styles.styledButton}>
              <Text style={styles.styledButtonText}>Усиновити</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View>
            <Text style={styles.subtitle}>Про друга</Text>
            <View style={styles.infoList}>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{sex === 'Жіноча' ? 'Дівчинка' : 'Хлопчик'}</Text>
                <Text style={styles.infoDescription}>Стать</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{age}</Text>
                <Text style={styles.infoDescription}>Вік</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{breed}</Text>
                <Text style={styles.infoDescription}>Порода</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{color}</Text>
                <Text style={styles.infoDescription}>Забарвлення</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>Не стерилізовано</Text>
                <Text style={styles.infoDescription}>Стерилізація</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>Відсутня</Text>
                <Text style={styles.infoDescription}>Наявність вакцинації</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>Харків</Text>
                <Text style={styles.infoDescription}>Населений пункт</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.subtitle}>Коротка історія</Text>
            <Text style={styles.text}>
              Руденьке диво-хлопчик шукає дім та люблячу сім'ю. Малеча живе на
              вулиці у покинутій школі в небезпеці. Їсть усе. Оброблене від
              паразитів. Допоможемо з кастрацієй, якщо буде треба
            </Text>
            <View style={styles.behaviorBox}>
              <Text style={styles.behaviorTitle}>Особливості поведінки</Text>
              <Text style={styles.behaviorText}>Дружелюбний, але обережний</Text>
            </View>
            <Text style={styles.condTitle}>Умови прилаштування</Text>
            <Text style={styles.condText}>Квартира, або дім з базовими умовами для життя</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Усиновити</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PetInfo;
