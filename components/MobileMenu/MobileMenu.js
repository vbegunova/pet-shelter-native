import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./MobileMenu.styled";
import { useNavigation } from "@react-navigation/native";

const MobileMenu = ({ onClose }) => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    onClose();
    navigation.navigate(screen);
  };

  return (
    <Modal animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigation("Home")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigation("AboutUs")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigation("Adoption")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>Adoption</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigation("Help")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigation("CheckList")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>CheckList</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MobileMenu;
