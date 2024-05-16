import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingVertical: 53,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 114,
    elevation: 5,
    width: 340,
    alignItems: "center",
  },
  title: {
    fontFamily: "Hagrid-Trial-Extrabold",
    fontSize: 32,
    color: "#250C46",
    textAlign: "center",
    marginBottom: 23,
    letterSpacing: -0.2,
  },
  span: {
    marginLeft: 10,
  },
  textBox: {
    alignItems: "center",
  },
  text: {
    fontFamily: "Hagrid-Text-Trial-Medium",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.2,
    color: "#433629",
    textAlign: "center",
    marginBottom: 42,
  },
  secondText: {
    fontFamily: "Hagrid-Text-Trial-Extrabold",
    fontSize: 21,
    lineHeight: 26,
    letterSpacing: -0.4,
    color: "#433629",
    textAlign: "center",
  },
});
