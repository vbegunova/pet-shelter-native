import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingTop: 87,
    paddingBottom: 82,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    color: "#fff",
    textAlign: 'center',
    marginBottom: 33,
    fontSize: 32,
  },
  list: {
    flexDirection: 'column',
    marginBottom: 29,
    alignItems: 'center',
    gap: 20,
  },
  moreBtn: {
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: 'transparent',
    width: 220,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 68,
  },
  moreBtnText: {
    color: "#fff",
    fontFamily: 'Hagrid-Trial-Heavy',
    fontSize: 12,
    textTransform: "uppercase",
  },
});