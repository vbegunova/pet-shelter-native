import { useFonts } from "expo-font";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Adoption from "./screens/Adoption";

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
    <Adoption />
  );
};

export default App;
