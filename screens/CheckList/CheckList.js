import { ScrollView } from "react-native";
import CheckListHero from "../../components/CheckListHero";
import CheckListSlider from "../../components/CheckListSlider";
import CheckListKeyPoints from "../../components/CheckListKeyPoints";
import CheckListNeedToKnow from "../../components/CheckListNeedToKnow/CheckListNeedToKnow";

const CheckList = () => {
  return (
    <ScrollView style={{ backgroundColor: "#AB7CE9" }}>
      <CheckListHero />
      <CheckListSlider />
      <CheckListKeyPoints />
      <CheckListNeedToKnow />
    </ScrollView>
  );
};

export default CheckList;
