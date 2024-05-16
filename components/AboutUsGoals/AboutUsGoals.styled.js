import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingTop: 49,
    paddingBottom: 49,
    borderRadius: 30,
    backgroundColor: '#AB7CE9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 5,
  },
  container: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontSize: 32,
    letterSpacing: -0.3,
    textAlign: 'center',
    marginBottom: 20,
    color: "#fff",
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  subtitle: {
    fontFamily: 'Hagrid-Text-Trial-Extrabold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 19,
    color: '#FFDFE5',
  },
  list: {
    marginLeft: 25,
    width: 280,
  },
  fullItem: {
    flexDirection: "row",
    gap: 5,
  },
  number: {
    fontFamily: 'eUkraine-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.3,
    color: "#FFDFE5",
  },
  item: {
    fontFamily: 'eUkraine-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.3,
    color: '#FFDFE5',
    marginBottom: 10,
  },
});