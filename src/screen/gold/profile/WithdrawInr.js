import {
  Text, Button, ChevronLeftIcon, Input, Checkbox,
} from "native-base";
// import VirtualKeyboard from "react-native-virtual-keyboard";
import { VirtualKeyboard } from "react-native-screen-keyboard";
import { View, StyleSheet, } from "react-native";
import { useState } from "react";

export default function GoldWithdraw() {
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.withdrawScreenContainer}>

      <View style={styles.header}>
        <ChevronLeftIcon />
      </View>

      <View style={styles.amountInputContainer}>
        <Text style={styles.amountInputInfoText}>Enter Amount in INR</Text>
        <Text style={styles.amountInputDisplayText}>{"\u20B9"}{amount}</Text>
      </View>

      <View style={styles.amountInfoContainer}>
        <Text style={styles.amountInfoText}>Gold 0.56gm</Text>
        <Checkbox style={styles.redeemAllCheckbox}>
          <Text style={styles.redeemAllCheckboxText}>Redeem All</Text>
        </Checkbox>
      </View>

      <View style={styles.infoColsContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTextHeading}>Current Balance</Text>
          <Text style={styles.infoText}>{"\u20B9"} 9540</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTextHeading}>Gold Price</Text>
          <Text style={styles.infoText}>13 Feb '23</Text>
        </View>
      </View>

      <VirtualKeyboard keyboardStyle={styles.keyboard} keyStyle={styles.key} keyTextStyle={styles.keyText} onChange={value => setAmount(value)} />
      <Button style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>Withdraw</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  withdrawScreenContainer: {
    padding: 25,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    height: "100%",
  },
  heading: {
    marginTop: 20,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#004AAD",
  },
  amountInputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: "10%",
  },
  amountInputInfoText: {
    color: "#f1f1f1",
    opacity: 0.7,
    fontSize: 12,
    fontFamily: "OpenSans-Regular",
  },
  amountInputDisplayText: {
    color: "#f1f1f1",
    // fontWeight: "400",
    fontSize: 36,
    lineHeight: 38,
    fontFamily: "OpenSans-SemiBold",
  },
  amountInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: "5%",
  },
  amountInfoText: {
    color: "#f1f1f1",
    opacity: 0.7,
    fontSize: 14,
    fontFamily: "OpenSans-Medium",
  },
  redeemAllCheckbox: {
    height: 14,
    width: 14,
  },
  redeemAllCheckboxText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#f1f1f1",
    opacity: 0.7,
    fontFamily: "OpenSans-Medium",
  },
  infoColsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginVertical: "10%",
  },
  infoText: {
    fontSize: 14,
    // fontWeight: "500",
    color: "#f1f1f1",
    // opacity: 0.7,
    fontFamily: "OpenSans-SemiBold",
  },
  infoTextHeading: {
    fontSize: 14,
    // fontWeight: "500",
    color: "#f1f1f1",
    opacity: 0.7,
    fontFamily: "OpenSans-Medium",
  },
  keyboard: {
    width: "100%",
    backgroundColor: "#000000",
    height: 300,
  },
  key: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "#000000",
  },
  keyText: {
    color: "#f1f1f1",
  },
  withdrawButton: {
    backgroundColor: "#f5f5f5",
    marginTop: "10%",
  },
  withdrawButtonText: {
    color: "#090909",
    fontWeight: "500",
  }
});