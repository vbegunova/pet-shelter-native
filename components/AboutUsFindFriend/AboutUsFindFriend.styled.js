import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingTop: 81,
    paddingBottom: 430,
    alignItems: "center",
  },
  container: {
    position: "relative",
    paddingHorizontal: 15,
    width: 340,
  },
  title: {
    fontFamily: "Hagrid-Trial-Extrabold",
    fontSize: 32,
    letterSpacing: -0.4,
    color: "#250C46",
    marginBottom: 28,
    textAlign: "center",
    textTransform: "uppercase",
  },
  text: {
    fontFamily: "Hagrid-Text-Trial-Medium",
    fontSize: 16,
    color: "#250C46",
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 42,
  },
  firstText: {
    fontFamily: "Hagrid-Text-Trial-Medium",
    fontSize: 16,
    color: "#250C46",
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  styledLink: {
    width: 250,
    height: 53,
    borderRadius: 51,
    backgroundColor: "#FE3FA0",
    letterSpacing: -0.3,
    lineHeight: 53,
    textAlign: "center",
    marginBottom: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    textTransform: "uppercase",
    color: "#fff",
    fontFamily: "Hagrid-Trial-Heavy",
    fontSize: 13,
  },
  image: {
    position: "absolute",
    width: 359,
    height: 277,
    bottom: -358,
    right: -5,
  },
});
