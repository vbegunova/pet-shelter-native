import "react-native-gesture-handler";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Adoption from "./screens/Adoption";
import CheckList from "./screens/CheckList";
import Help from "./screens/Help";
import PetPage from "./screens/PetPage";
import Contacts from "./screens/Contacts";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, state }) => {
  const focusedRouteName = state.routeNames[state.index];

  const getMenuItemStyle = (routeName) => {
    return routeName === focusedRouteName
      ? { ...styles.menuText, ...styles.menuTextActive }
      : styles.menuText;
  };

  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={getMenuItemStyle("Home")}>Домашня сторінка</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("AboutUs")}
      >
        <Text style={getMenuItemStyle("AboutUs")}>Про нас</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Adoption")}
      >
        <Text style={getMenuItemStyle("Adoption")}>Хвостики</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("CheckList")}
      >
        <Text style={getMenuItemStyle("CheckList")}>Чек-ліст</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Help")}
      >
        <Text style={getMenuItemStyle("Help")}>Як допомогти</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Contacts")}
      >
        <Text style={getMenuItemStyle("Contacts")}>Контакти</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "eUkraine-Bold": require("./assets/fonts/e-Ukraine-Bold.ttf"),
    "eUkraine-Light": require("./assets/fonts/e-Ukraine-Light.ttf"),
    "eUkraine-Medium": require("./assets/fonts/e-Ukraine-Medium.ttf"),
    "eUkraine-Regular": require("./assets/fonts/e-Ukraine-Regular.ttf"),
    "eUkraineHead-Bold": require("./assets/fonts/e-UkraineHead-Bold.ttf"),
    "eUkraineHead-Regular": require("./assets/fonts/e-UkraineHead-Regular.ttf"),
    "Hagrid-Trial-Extrabold": require("./assets/fonts/Hagrid-Extrabold-trial.ttf"),
    "Hagrid-Trial-Heavy": require("./assets/fonts/Hagrid-Heavy-trial.ttf"),
    "Hagrid-Trial-Medium": require("./assets/fonts/Hagrid-Medium-trial.ttf"),
    "Hagrid-Extrabold": require("./assets/fonts/Hagrid-Extrabold.ttf"),
    "Hagrid-Text-Trial-Bold": require("./assets/fonts/Hagrid-Text-Bold-trial.ttf"),
    "Hagrid-Text-Trial-Extrabold": require("./assets/fonts/Hagrid-Text-Extrabold-trial.ttf"),
    "Hagrid-Text-Trial-Medium": require("./assets/fonts/Hagrid-Text-Medium-trial.ttf"),
    "Soyuz-Grotesk": require("./assets/fonts/soyuz-grotesk-bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={styles.drawerStyle}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: "right",
          drawerType: "front",
          drawerActiveTintColor: "#AB7CE9",
          drawerInactiveTintColor: "#000",
          drawerActiveBackgroundColor: "#f0e1ff",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Домашня сторінка",
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftText}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRight}
              >
                <Image
                  source={require("./assets/images/paw-menu-white.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="AboutUs"
          component={AboutUs}
          options={({ navigation }) => ({
            title: "Про нас",
            headerStyle: styles.headerStyleLight,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftTextDark}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRightDark}
              >
                <Image
                  source={require("./assets/images/paw-menu.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="Adoption"
          component={Adoption}
          options={({ navigation }) => ({
            title: "Адопція",
            headerStyle: styles.headerStyleLight,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftTextDark}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRightDark}
              >
                <Image
                  source={require("./assets/images/paw-menu.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="CheckList"
          component={CheckList}
          options={({ navigation }) => ({
            title: "Чек-ліст",
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftText}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRight}
              >
                <Image
                  source={require("./assets/images/paw-menu-white.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="Help"
          component={Help}
          options={({ navigation }) => ({
            title: "Як допомогти",
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftText}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRight}
              >
                <Image
                  source={require("./assets/images/paw-menu-white.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="PetPage"
          component={PetPage}
          options={({ navigation }) => ({
            title: "Інформація про тварину",
            headerStyle: styles.headerStyleLight,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftTextDark}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRightDark}
              >
                <Image
                  source={require("./assets/images/paw-menu.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="Contacts"
          component={Contacts}
          options={({ navigation }) => ({
            title: "Контакти",
            headerStyle: styles.headerStyleLight,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Contacts")}
                style={styles.headerLeft}
              >
                <Text style={styles.headerLeftTextDark}>PetCat</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.headerRightDark}
              >
                <Image
                  source={require("./assets/images/paw-menu.png")}
                  style={styles.headerRightImage}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  drawerStyle: {
    backgroundColor: "#fff",
    width: 300,
  },
  drawerContent: {
    paddingTop: 90,
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  menuItem: {
    marginBottom: 25,
  },
  menuText: {
    fontSize: 18,
    fontFamily: "Hagrid-Trial-Extrabold",
    color: "#250C46",
  },
  menuTextActive: {
    color: "#FE3FA0",
  },
  headerStyle: {
    backgroundColor: "#AB7CE9",
    height: 120,
  },
  headerStyleLight: {
    backgroundColor: "#fff",
    height: 120,
  },
  headerTitleStyle: {
    display: "none",
    fontFamily: "Hagrid-Trial-Extrabold",
    fontSize: 20,
  },
  headerLeft: {
    marginLeft: 20,
  },
  headerLeftText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "Hagrid-Trial-Heavy",
    textTransform: "uppercase",
  },
  headerLeftTextDark: {
    fontSize: 24,
    color: "#250C46",
    fontFamily: "Hagrid-Trial-Heavy",
    textTransform: "uppercase",
  },
  headerRight: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderColor: "#fff",
    borderRadius: 50,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightDark: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 50,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightImage: {
    width: 17,
    height: 20,
  },
};

export default App;
