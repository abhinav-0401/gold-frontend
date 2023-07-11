import {
  View, StyleSheet, Image, Text,
} from "react-native";

import ProfileButton from "../../components/ProfileButton";
import HamburgerMenu from "../../components/HamburgerMenu";
import TotalSavings from "../../components/TotalSavings";
import RecentActivity from "../../components/RecentActivity";
import ActivateDailySavings from "../../components/ActivateDailySavings";
import RoundupChange from "../../components/RoundupChange";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function GoldHomeFinal({ navigation }) {
  const stocks = ["MS", "Google", "Flipkart", "Filit", "Zomato"];
  const bannerImg = require("../../static/icons/recommended.png");
  const lineImg = require("../../static/icons/slidebar.png");

  return (
    <View style={styles.homeScreen}>

      <View style={styles.mainContainer}>
        <View style={styles.topBar}>
          <ProfileButton userName="Fatima" />
          <TouchableHighlight onPress={() => navigation.navigate("gold-profile")}>
            <HamburgerMenu />
          </TouchableHighlight>
        </View>

        <TotalSavings amount="100" navigation={navigation} />
      </View>

      {/* <ActivateDailySavings /> */}

      <TouchableWithoutFeedback onPress={() => navigation.navigate("gold-roundups")}>
        <RoundupChange value={25} />
      </TouchableWithoutFeedback>

      <View style={{
        alignItems: "center",
        marginTop: "5%",
        marginBottom: "8%",
      }}>
        <Image source={lineImg} />
      </View>

      <View style={styles.recommendedContainer}>
        <Text style={styles.recommendedText}>Recommended</Text>
        <Image source={bannerImg} />
      </View>

      <RecentActivity stocks={stocks} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    // color: "white",
    height: "100%",
    // backgroundColor: "black",
  },
  mainContainer: {
    backgroundColor: "black",
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    padding: "3%",
    // paddingTop: 10,
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    // gap: 200,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    // margin: 15,
  },
  recommendedContainer: {
    gap: 20,
    marginHorizontal: "5%",
    marginBottom: "8%",
  },
  recommendedText: {
    fontFamily: "OpenSans-SemiBold",
    color: "black",
    fontSize: 16,
  }
});