import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    width: 300,
    height: 293,
    backgroundColor: "#ECDDFE",
    borderRadius: 30,
    paddingTop: 196,
    paddingBottom: 20,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30.65,
    elevation: 5,
  },
  itemTitle: {
    fontFamily: "Hagrid-Text-Trial-Extrabold",
    fontSize: 12,
    color: "#250C46",
    marginBottom: 10,
  },
  moreBtn: {
    backgroundColor: "#FE3FA0",
    width: 118,
    height: 40,
    borderRadius: 40,
    paddingBottom: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  moreBtnText: {
    color: "#fff",
    fontSize: 9,
    fontFamily: "Hagrid-Trial-Heavy",
  },
});
