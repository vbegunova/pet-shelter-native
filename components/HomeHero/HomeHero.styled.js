import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionHero: {
    paddingTop: 186,
    paddingBottom: 47,
    overflowX: "hidden",
  },
  heroContainer: {
    alignItems: "center",
  },
  title: {
    marginBottom: 43,
    fontFamily: "Hagrid-Trial-Heavy",
    fontWeight: "900",
    color: "#fff",
    fontSize: 51,
    textAlign: "center",
  },
  titleAccent: {
    color: "#250C46",
  },
  heroText: {
    marginBottom: 75,
    width: 248,
    fontSize: 16,
    fontFamily: "eUkraineHead-Regular",
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  heroImage: {
    width: 170,
    height: 262,
    position: "absolute",
    top: 110,
    left: -20,
  },
  bgLineFirst: {
    width: 1399,
    height: 806,
    opacity: 0.06,
    position: "absolute",
    left: -294,
    top: -125,
  },
  bgLineSecond: {
    width: 1033,
    height: 595,
    transform: [{ scaleY: -1 }],
    opacity: 0.06,
    position: "absolute",
    left: 284,
    top: -10,
  },
  sectionHelp: {
    position: "relative",
    alignItems: "center",
    zIndex: 2,
    overflow: "hidden",
    width: "100%",
    padding: 38,
    borderRadius: 30,
    textAlign: "center",
    backgroundColor: "#F3E9FF",
    paddingBottom: 300,
  },
  helpTitle: {
    fontFamily: "Hagrid-Trial-Extrabold",
    color: "#250C46",
    fontSize: 25,
    marginBottom: 29,
  },
  helpSubtitle: {
    width: 300,
    textAlign: "center",
    marginBottom: 26,
    fontFamily: "Hagrid-Trial-Medium",
    color: "#1B1B29",
    textTransform: "uppercase",
    fontSize: 16,
  },
  helpList: {
    marginBottom: 34,
    alignItems: "center",
  },
  helpItem: {
    fontFamily: "eUkraine-Light",
    color: "#433629",
    fontSize: 16,
    marginBottom: 3,
  },
  styledLink: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE3FA0",
    borderRadius: 62,
    width: 200,
    height: 50,
    fontSize: 11,
    paddingVertical: 5,
    alignSelf: "center",
  },
  styledLinkText: {
    color: "#fff",
    fontFamily: "Hagrid-Trial-Heavy",
    textTransform: "uppercase",
  },
  helpImage: {
    position: "absolute",
    bottom: -45,
    right: 30,
    width: 270,
    height: 293,
  },
});