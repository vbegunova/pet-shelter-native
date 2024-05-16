import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 114,
    borderRadius: 30,
    paddingTop: 42,
    paddingBottom: 50,
  },
  container: {
    paddingHorizontal: 17,
    paddingTop: 42,
    paddingBottom: 50,
  },
  title: {
    fontFamily: "Hagrid-Trial-Heavy",
    color: "#250C46",
    textAlign: "center",
    marginBottom: 46,
    fontSize: 32,
  },
  list: {
    marginBottom: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreButton: {
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    textTransform: "uppercase",
    borderWidth: 2,
    borderColor: "#FE3FA0",
    borderRadius: 70,
    width: 196,
    height: 56,
    paddingBottom: 5,
  },
  moreButtonText: {
    color: "#FE3FA0",
    letterSpacing: -0.3,
    fontSize: 13,
    fontFamily: "Hagrid-Trial-Heavy",
    textTransform: "uppercase",
  },
});
