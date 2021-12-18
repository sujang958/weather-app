import { Dimensions, StyleSheet } from "react-native"

const container = StyleSheet.create({
  bg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 1.5,
    marginHorizontal: 10,
    marginTop: 18,
  },
  body: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 30,
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 18,
  },
  forBorder: {
    borderRightColor: "#fff",
    borderRightWidth: 5,
    height: 100,
    flex: 0.001,
    marginRight: 10,
  },
  tempContainer: {
    flex: 0.5,
  },
  cityContainer: {
    flex: 0.5,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

export default container
