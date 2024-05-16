import { ScrollView } from "react-native";
import HelpHero from "../../components/HelpHero";
import HelpPresentSection from "../../components/HelpPresentSection";
import HelpWithThings from "../../components/HelpWithThings";
import GrantLove from "../../components/GrantLove";

const Help = () => {
  return (
    <ScrollView style={{ backgroundColor: "#AB7CE9" }}>
      <HelpHero />
      <HelpPresentSection />
      <HelpWithThings />
      <GrantLove />
    </ScrollView>
  );
};

export default Help;