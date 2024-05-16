import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingVertical: 20,
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 20,
    width: 340,
  },
  title: {
    fontFamily: "Hagrid-Trial-Extrabold",
    fontSize: 32,
    letterSpacing: -0.3,
    marginBottom: 30,
    color: "#250C46",
    textAlign: "center",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Hagrid-Trial-Extrabold",
    fontSize: 21,
    letterSpacing: -0.3,
    marginBottom: 25,
    lineHeight: 27,
    color: "#250C46",
    textAlign: "center",
    textTransform: "uppercase",
  },
  list: {
    marginBottom: 17,
    alignItems: "center",
  },
  item: {
    fontFamily: "Hagrid-Text-Trial-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#250C46",
  },
  button: {
    width: 184,
    height: 48,
    borderRadius: 30,
    backgroundColor: "#FE3FA0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 37,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "Hagrid-Trial-Heavy",
    fontSize: 11,
    letterSpacing: -0.3,
    color: "#fff",
    textTransform: "uppercase",
  },
  imageBox: {
    alignSelf: "center",
    width: 300,
    height: 321,
    backgroundColor: "#ECDDFE",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 271,
    height: 177,
  },
});
