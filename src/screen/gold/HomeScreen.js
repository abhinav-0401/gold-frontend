import {
  View, StyleSheet, Text
} from "react-native";
import {
  Button, ArrowForwardIcon,
} from "native-base";

import ProfileButton from "../../components/ProfileButton";
import HamburgerMenu from "../../components/HamburgerMenu";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function GoldHomeScreen({ navigation }) {
  const stocks = ["MS", "Google", "Flipkart", "Filit", "Zomato"];

  return (
    <View style={styles.homeScreen}>

      <View style={styles.topBar}>
        <ProfileButton userName="Fatima" />
        <TouchableHighlight onPress={() => navigation.navigate("gold-profile")}>
          <HamburgerMenu />
        </TouchableHighlight>
      </View>

      <View style={styles.topHalfContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>STEP 1</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Decide how to save</Text>
        </View>
        <Button style={styles.startButton} onPress={() => navigation.navigate("gold-start-daily-savings")}><View style={styles.buttonView}><Text style={styles.startButtonText}>Let's Start</Text><ArrowForwardIcon /></View></Button>
      </View>
      <View style={styles.bottomHalfContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>STEP 2</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Set Up UPI</Text>
        </View>
        <Button style={styles.startButton} onPress={() => navigation.navigate("gold-autopay")}><View style={styles.buttonView}><Text style={styles.startButtonText}>Let's Start</Text><ArrowForwardIcon /></View></Button>
        <View style={styles.laterContainer}>
          <Text style={styles.laterText}>Do it later</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    color: "white",
    height: "100%",
    backgroundColor: "#1E1E1E",
    // padding: 20,
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    // gap: 180,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    margin: 15,
  },
  topHalfContainer: {
    padding: "10%",
    marginHorizontal: "10%",
    paddingVertical: "25%",
    gap: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  bottomHalfContainer: {
    padding: "20%",
    paddingVertical: "25%",
    gap: 20,
    alignItems: "center",
  },
  headingContainer: {

  },
  headingText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
  },
  descriptionContainer: {

  },
  descriptionText: {
    color: "#F5F5F5",
    opacity: 0.7,
    fontFamily: "OpenSans-Regular",
    fontSize: 18,
  },
  startButton: {
    marginTop: 10,
    width: "70%",
    backgroundColor: "#F5F5F5",
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  startButtonText: {
    color: "#090909",
    fontFamily: "OpenSans-SemiBold",
  },
  laterContainer: {
    marginTop: 30,
  },
  laterText: {
    color: "#7A7A7A",
    fontFamily: "OpenSans-SemiBold",
  }
});