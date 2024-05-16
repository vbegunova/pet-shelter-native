import React from "react";
import { ScrollView } from "react-native";
import AdoptionHero from "../../components/AdoptionHero";
import AdoptionFindFriend from "../../components/AdoptionFindFriend";
import AdoptionHelp from "../../components/AdoptionHelp";

const Adoption = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <AdoptionHero />
      <AdoptionFindFriend />
      <AdoptionHelp />
    </ScrollView>
  );
};

export default Adoption;
