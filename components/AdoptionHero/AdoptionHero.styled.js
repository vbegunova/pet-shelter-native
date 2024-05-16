import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingTop: 112,
    paddingBottom: 27,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: -5 },
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 114,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  checkListContainer: {
    paddingBottom: 72,
    paddingTop: 46,
    paddingHorizontal: 10,
    backgroundColor: "#AB7CE9",
    borderRadius: 30,
    marginBottom: 72,
    alignItems: 'center',
  },
  title: {
    marginBottom: 42,
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontSize: 25,
    letterSpacing: -0.3,
    color: '#250C46',
    width: 310,
  },
  text: {
    marginBottom: 64,
    fontFamily: 'Hagrid-Text-Trial-Medium',
    fontSize: 16,
    color: '#000',
    width: 310,
  },
});