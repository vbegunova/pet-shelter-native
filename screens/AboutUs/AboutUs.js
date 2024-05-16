import { ScrollView } from "react-native";
import AboutUsHero from "../../components/AboutUsHero";
import AboutUsGoals from "../../components/AboutUsGoals";
import AboutUsFamily from "../../components/AboutUsFamily";
import AboutUsDoMore from "../../components/AboutUsDoMore";
import AboutUsHelp from "../../components/AboutUsHelp";
import AboutUsFindFriend from "../../components/AboutUsFindFriend";

const AboutUs = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <AboutUsHero />
      <AboutUsGoals />
      <AboutUsFamily />
      <AboutUsDoMore />
      <AboutUsHelp />
      <AboutUsFindFriend />
    </ScrollView>
  );
};

export default AboutUs;