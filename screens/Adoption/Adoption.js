import React from "react";
import { ScrollView } from "react-native";
import AdoptionHero from "../../components/AdoptionHero";

const Adoption = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <AdoptionHero />
    </ScrollView>
  );
};

export default Adoption;
