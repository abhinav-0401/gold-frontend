import {
  View, StyleSheet, Text, Image,
} from "react-native";
import {
  ChevronRightIcon, InfoOutlineIcon,
} from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function GoldProfile({ navigation }) {
  const profileImg = require("../../../static/icons/Profiles.png");
  const profileIcon = require("../../../static/icons/profile.png");
  const profileNewIcon = require("../../../static/icons/profilenew.png");
  const bankIcon = require("../../../static/icons/bank.png");
  const activatedIcon = require("../../../static/icons/activate.png");
  const withdrawIcon = require("../../../static/icons/withdraw.png");
  const orderHistoryIcon = require("../../../static/icons/orderHistory.png");
  const withdrawSavingsIcon = require("../../../static/icons/withdrawSavings.png");
  const securityIcon = require("../../../static/icons/security.png");
  const faqIcon = require("../../../static/icons/faq.png");
  // const Icon = require("../../../static/icons/.png");

  return (
    <View style={styles.screenContainer}>

      <View style={styles.headerContainer}>
        <Image source={profileImg} style={styles.profileImg} />
        <View style={styles.headerInfoContainer}>
          <Text style={styles.headerNameText}>Fatima Iqbaal</Text>
          <Text style={styles.headerMailText}>fatimaiqbaal009@gmail.com</Text>
        </View>
      </View>

      <Text style={styles.headingText}>Profile Settings</Text>

      <View style={styles.optionsBlockContainer}>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={profileIcon} />
            <Text style={styles.optionText}>My Profile</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-profile-settings")}>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={profileNewIcon} />
            <Text style={styles.optionText}>Nominee Details</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-nominee-details")}>
            <ChevronRightIcon />
          </TouchableHighlight>

        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={bankIcon} />
            <Text style={styles.optionText}>Bank Details</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-bank-details")}>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.optionsBlockContainer}>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={activatedIcon} />
            <Text style={styles.optionText}>Activated Savings</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-active-savings")}>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={withdrawIcon} />
            <Text style={styles.optionText}>Withdraw Savings</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-withdraw")}>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={orderHistoryIcon} />
            <Text style={styles.optionText}>Order History</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-order-history")}>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={withdrawSavingsIcon} />
            <Text style={styles.optionText}>Savings History</Text>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("gold-transaction-history")}>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.optionsBlockContainer}>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeftContainer}>
            <Image source={securityIcon} />
            <Text style={styles.optionText}>Security & Permissions</Text>
          </View>
          <TouchableHighlight>
            <ChevronRightIcon />
          </TouchableHighlight>
        </View>
        <View style={styles.optionContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("gold-faq")}>
            <View style={styles.optionLeftContainer}>
              <Image source={faqIcon} />
              <Text style={styles.optionText}>FAQ</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.optionContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("gold-about")}>
            <View style={styles.optionLeftContainer}>
              {/* <Image source={profileIcon} /> */}
              <InfoOutlineIcon />
              <Text style={styles.optionText}>About Filit</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#000000",
    padding: "10%",
    paddingTop: "15%",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  profileImg: {
    width: 60,
    height: 60,
  },
  headerInfoContainer: {
    gap: 3,
  },
  headerNameText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 17,
    color: "#f1f1f1",
  },
  headerMailText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: "#d9d9d9",
  },
  headingText: {
    fontFamily: "OpenSans-Bold",
    fontSize: 15,
    color: "#d9d9d9",
    marginTop: "10%",
    marginBottom: "5%",
  },
  optionsBlockContainer: {
    paddingBottom: "10%",
    borderBottomWidth: 1,
    borderColor: "gray",
    gap: 15,
    marginBottom: "10%",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 15,
    color: "#d9d9d9",
  }
});