import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: -5 },
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 114,
    borderRadius: 30,
    paddingTop: 42,
    paddingBottom: 36,
    position: 'relative',
  },
  container: {
    alignItems: 'center',
    position: 'relative',
  },
  box: {
    zIndex: 1,
  },
  title: {
    marginBottom: 46,
    fontFamily: 'Hagrid-Trial-Heavy',
    fontSize: 32,
    color: '#250C46',
    textAlign: 'center',
  },
  list: {
    marginBottom: 35,
    gap: 10,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FE3FA0',
    borderRadius: 70,
    width: 196,
    height: 56,
    paddingBottom: 2,
    alignSelf: "center",
  },
  moreButtonText: {
    color: '#FE3FA0',
    backgroundColor: 'transparent',
    fontFamily: 'Hagrid-Trial-Heavy',
    textTransform: 'uppercase',
    letterSpacing: -0.3,
    fontSize: 13,
  },
});