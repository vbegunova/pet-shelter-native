import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    padding: 56,
    paddingBottom: 72,
    borderRadius: 30,
    backgroundColor: "#fff", // Змінити на відповідний колір з globalColors
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.15,
    shadowRadius: 114,
  },
  title: {
    marginBottom: 38,
    fontFamily: "Hagrid-Trial-Heavy",
    fontSize: 32,
    color: "#250C46",
    textAlign: "center",
  },
  text: {
    fontFamily: "eUkraine-Light",
    fontSize: 16,
    marginBottom: 33,
    color: "#433629",
    textAlign: "center",
    width: 285,
  },
  button: {
    width: 179,
    height: 47,
    borderRadius: 60,
    backgroundColor: "#FE3FA0", // Змінити на відповідний колір з globalColors
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "Hagrid-Trial-Heavy",
    fontSize: 11,
    color: "#fff",
    textTransform: "uppercase",
  },
  icon: {
    position: "absolute",
    bottom: 20,
    right: -45,
    width: 110,
    height: 124,
    transform: [{ rotate: "-31deg" }],
  },
});
