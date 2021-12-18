import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, Pressable, Text, View } from "react-native"
import container from "./styles/container"
import text from "./styles/text"
import { Ionicons, Entypo } from "@expo/vector-icons"
import * as Location from "expo-location"
import axios from "axios"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState<any>({})
  const getPermissions = async (): Promise<boolean> => {
    const currentPermission = await Location.getForegroundPermissionsAsync()
    if (currentPermission.status === "granted") return true
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== "granted") return false
    return true
  }
  const getWeather = async () => {
    const isAllowed = await getPermissions()
    if (!isAllowed)
      alert("You denied the permission, weather will not localize")
    const { coords } = await Location.getCurrentPositionAsync({ accuracy: 5 })
    console.log(coords)
    axios
      .get(
        `http://127.0.0.1:1249/weather?lat=${coords.latitude}&long=${coords.longitude}`
      )
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    getWeather()
  }, [])

  if (loading)
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <StatusBar style="light" />
        <ActivityIndicator size={64} color="#000" />
      </View>
    )

  return (
    <>
      <LinearGradient colors={["#616161", "#303030"]} style={container.bg} />
      <View style={container.container}>
        <View style={container.header}>
          <View style={container.menuContainer}>
            <Text style={text.dayText}>Monday</Text>
            <Pressable
              onPress={() =>
                alert(
                  `Weather Vectors by Vecteezy\nhttps://www.vecteezy.com/free-vector/weather`
                )
              }
            >
              <Entypo
                name="dots-three-vertical"
                size={24}
                color="#fff"
                style={{ marginTop: 29 }}
              />
            </Pressable>
          </View>
          <Text style={text.time}>08:10</Text>
        </View>
        <View style={container.body}>
          <Ionicons name="cloudy-night-outline" size={182} color="#fff" />
          <Text style={text.weatherLike}>{weather.like}</Text>
        </View>
        <View style={container.footer}>
          <View style={container.tempContainer}>
            <Text style={text.temperature}>20ºC</Text>
          </View>
          <View style={container.forBorder}></View>
          <View style={container.cityContainer}>
            <Text style={text.city}>Seoul</Text>
            <Text style={text.country}>Korea</Text>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </>
  )
}
