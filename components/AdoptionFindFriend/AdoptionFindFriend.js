import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./AdoptionFindFriend.styled";
import PetItem from "../PetItem";
import { useNavigation } from "@react-navigation/native";
import { fetchCats } from "../../services/api";

const AdoptionFindFriend = () => {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPagination, setIsPagination] = useState(false);
  const limit = 3;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCats(limit, currentPage);
        setCats(resp.data);
        setTotalPages(resp.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [limit, currentPage]);

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Знайти друга</Text>
          <View style={styles.list}>
            {cats.map(({ _id, name, sex, age }) => {
              return (
                <PetItem key={_id} id={_id} name={name} sex={sex} age={age} />
              );
            })}
          </View>

          {!isPagination && (
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() => setIsPagination(true)}
            >
              <Text style={styles.moreButtonText}>Усі хвостики</Text>
            </TouchableOpacity>
          )}
          {isPagination && (
            <View style={styles.paginationWrapper}>
              <TouchableOpacity
                style={[
                  styles.paginationButton,
                  currentPage === 1 && styles.disabledButton,
                ]}
                onPress={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <Image
                  source={require("../../assets/prev-button-mobile.png")} 
                  style={styles.paginationIcon}
                />
              </TouchableOpacity>
              <Text style={styles.paginationText}>
                Сторінка {currentPage} з {totalPages}
              </Text>
              <TouchableOpacity
                style={[
                  styles.paginationButton,
                  currentPage === totalPages && styles.disabledButton,
                ]}
                onPress={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <Image
                  source={require("../../assets/next-button-mobile.png")}
                  style={styles.paginationIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default AdoptionFindFriend;
