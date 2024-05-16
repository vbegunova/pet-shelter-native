import React from "react";
import { ScrollView } from "react-native";
import FindFriend from "../../components/FindFriend";
import HomeHero from "../../components/HomeHero";
import BlogSection from "../../components/BlogSection";
import NewsSection from "../../components/NewsSection";
import HomeFindFriend from "../../components/HomeFindFriend";

const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: "#AB7CE9" }}>
      <HomeHero />
      <FindFriend />
      <BlogSection />
      <NewsSection />
      <HomeFindFriend />
    </ScrollView>
  );
};

export default Home;
