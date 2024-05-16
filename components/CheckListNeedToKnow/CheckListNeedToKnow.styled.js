import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingBottom: 65,
    alignItems: "center",
  },
  container: {
    width: 340,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: 'Hagrid-Trial-Extrabold',
    color: "#fff",
    textAlign: "center",
    marginBottom: 28,
  },
  imageBox: {
    width: 300,
    height: 305,
    borderRadius: 30,
    backgroundColor: "#FE3FA0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    alignSelf: "center",
    marginBottom: 23,
  },
  image: {
    width: 144,
    height: 139,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "Hagrid-Text-Trial-Bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
    marginBottom: 27,
  },
  list: {
    marginBottom: 27,
    alignItems: "center",
  },
  item: {
    fontFamily: "Hagrid-Text-Trial-Bold",
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
  },
  button: {
    backgroundColor: "#FE3FA0",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 263,
    height: 54,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "Hagrid-Trial-Heavy",
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
