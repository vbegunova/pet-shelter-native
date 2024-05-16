import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingBottom: 175,
  },
  container: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    width: 300,
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontSize: 32,
    letterSpacing: -0.2,
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center',
  },
  swiper: {
    height: 324,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 324,
    borderRadius: 40,
    backgroundColor: "#e1e2ff",
    marginLeft: 55,
  },
  text: {
    fontFamily: 'eUkraineHead-Regular',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#433629',
    textAlign: 'center',
    width: 261,
  },
  prevButton: {
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: '#FE3FA0',
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: 140,
  },
  nextButton: {
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: '#FE3FA0',
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    right: 140,
  },
});
