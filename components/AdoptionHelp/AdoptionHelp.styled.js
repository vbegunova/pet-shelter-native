import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingTop: 49,
    paddingBottom: 49,
  },
  container: {
    alignItems: "center",
  },
  titleBox: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontFamily: "Hagrid-Trial-Extrabold",
    fontSize: 32,
    letterSpacing: -0.3,
    color: "#250C46",
    textAlign: "center",
    marginBottom: 12,
    width: 340,
  },
  subtitle: {
    fontFamily: "Hagrid-Text-Trial-Medium",
    fontSize: 16,
    letterSpacing: -0.3,
    lineHeight: 20,
    color: "#FE3FA0",
    textAlign: "center",
    width: 280,
  },
  list: {
    marginBottom: 21,
    alignItems: "center",
  },
  item: {
    fontFamily: "Hagrid-Text-Trial-Medium",
    fontSize: 20,
    lineHeight: 18,
    color: "#472179",
    marginBottom: 12,
  },
  moreBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE3FA0",
    borderRadius: 52,
    width: 251,
    height: 54,
    marginBottom: 10,
  },
  moreBtnText: {
    fontFamily: "Hagrid-Trial-Heavy",
    fontSize: 13,
    color: '#fff',
    textTransform: "uppercase",
  },
});
