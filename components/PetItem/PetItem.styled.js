import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFDFE5",
    flexDirection: 'column',
    width: 300,
    height: 305,
    borderRadius: 30,
    padding: 25,
    marginBottom: 15,
  },
  name: {
    color: "#fff",
    fontFamily: 'eUkraine-Medium',
    fontSize: 27,
    marginBottom: 5,
    letterSpacing: -0.6,
  },
  info: {
    color: "#fff",
    fontFamily: 'eUkraine-Light',
    fontSize: 13,
    letterSpacing: -0.6,
    marginBottom: 5,
  },
  styledLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FE3FA0",
    marginTop: 'auto',
    width: 150,
    height: 52,
    fontSize: 12,
    borderRadius: 52,
    paddingBottom: 3,
  },
  styledLinkText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Hagrid-Trial-Heavy",
    textTransform: "uppercase",
    marginRight: 4,
  },
  linkIcon: {
    width: 13,
    height: 15,
    marginTop: 3,
    marginLeft: 4,
  },
});