import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    paddingBottom: 133, 
  },
  container: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontSize: 32,
    marginBottom: 37,
    textAlign: 'center',
    color: '#ffffff',
  },
  list: {
    flexDirection: "column",
    gap: 22,
    width: 300,
  },
  itemTitle: {
    fontFamily: 'Hagrid-Extrabold',
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});