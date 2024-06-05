import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

// Define global colors or import from a central style file if available
const globalColors = {
  accent: "#AB7CE9",
  light: "#ffffff",
  title: "#250C46",
};

const Contacts = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.title}>Контакти</Text>
        <View style={styles.box}>
          <View style={styles.socMediaList}>
            <TouchableOpacity style={styles.socMediaItem}>
              <Image
              style={styles.socIcon}
                height={34}
                width={34}
                source={require("../../assets/instagram.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socMediaItem}>
              <Image
              style={styles.socIcon}
                height={34}
                width={34}
                source={require("../../assets/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socMediaItem}>
              <Image
              style={styles.socIcon}
                height={34}
                width={34}
                source={require("../../assets/telegram.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socMediaItem}>
              <Image
              style={styles.socIcon}
                height={34}
                width={34}
                source={require("../../assets/viber.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Подзвонити</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Надіслати лист</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 127,
    paddingBottom: 46,
    alignItems: "center", // Adjust as per your layout needs
    justifyContent: "center", // Adjust as per your layout needs
  },
  container: {
    width: "90%", // Adjust width as per your layout needs
  },
  title: {
    marginBottom: 38,
    fontFamily: "Hagrid-Trial-Extrabold",
    fontWeight: "800",
    fontSize: 32,
    letterSpacing: -0.3,
    textAlign: "center",
    color: globalColors.title,
  },
  box: {
    flexDirection: "column", // Adjust as per your layout needs
    alignItems: "center", // Adjust as per your layout needs
    justifyContent: "center", // Adjust as per your layout needs
    marginTop: 18, // Adjust as per your layout needs
    marginBottom: 18, // Adjust as per your layout needs
  },
  socMediaList: {
    flexDirection: "row", // Adjust as per your layout needs
    alignItems: "center", // Adjust as per your layout needs
    justifyContent: "center", // Adjust as per your layout needs
    marginBottom: 18, // Adjust as per your layout needs
  },
  socMediaItem: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: globalColors.accent,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8, // Adjust as per your layout needs
  },
  buttonsContainer: {
    flexDirection: "row", // Adjust as per your layout needs
    alignItems: "center", // Adjust as per your layout needs
    justifyContent: "center", // Adjust as per your layout needs
  },
  button: {
    width: 111,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: globalColors.accent,
    borderRadius: 48,
    marginRight: 5, // Adjust as per your layout needs
  },
  buttonText: {
    fontFamily: "Hagrid-Trial-Extrabold",
    fontWeight: "900",
    fontSize: 9,
    letterSpacing: -0.3,
    textTransform: "uppercase",
    color: globalColors.light,
    paddingBottom: 2, // Adjust as per your layout needs
  },
  socIcon: {
    width: 16,
    height: 16,
  }
});

export default Contacts;
