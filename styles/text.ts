import { StyleSheet } from "react-native"

const whiteColor = {
  color: "#fff",
}

const text = StyleSheet.create({
  dayText: {
    ...whiteColor,
    marginTop: 18,
    fontSize: 32,
  },
  time: {
    ...whiteColor,
    fontSize: 64,
    marginTop: -12,
    fontWeight: "bold",
  },
  weatherLike: {
    ...whiteColor,
    fontSize: 19.5,
    fontWeight: "bold",
  },
  temperature: {
    ...whiteColor,
    fontSize: 60,
    fontWeight: "bold",
  },
  city: {
    ...whiteColor,
    fontSize: 54,
    marginTop: 6, // temperature fontsize minus this fontsize
    fontWeight: "bold",
  },
  country: {
    ...whiteColor,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -20,
    marginLeft: 4,
  },
})

export default text
