import {
  View, StyleSheet, Text, Image,
} from "react-native";
import {
  Button, ChevronLeftIcon, ChevronRightIcon, CheckIcon, Switch,
} from "native-base";
import { useState } from "react";

export default function GoldRoundups() {
  const goldCoinImg = require("../../static/icons/goldCoin.png")
  const lineImg = require("../../static/icons/line.png");

  return (
    <View style={styles.screenContainer}>

      <View style={styles.mainContainer}>
        <ChevronLeftIcon />

        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>Savings</Text>
        </View>

        <Text style={styles.activeSavingsText}>Active Savings</Text>

        <View style={styles.infoboxContainer}>
          <View style={styles.inforowContainer}>
            <Text style={styles.inforowHeadingText}>ROUNDUPS</Text>
            <Text style={styles.inforowAmountText}>Rs 1,600</Text>
            <Text style={styles.inforowTimeText}>Earned yesterday</Text>
          </View>
          <Image source={goldCoinImg} />
        </View>

        <View style={styles.savingsInfoContainer}>
          <Text style={styles.infoText}>You are saving Rs 100 every day</Text>
        </View>

        <View style={styles.optionsListContainer}>
          <View style={styles.toggleOptionContainer}>
            <Text style={styles.optionText}>Roundups</Text>
            <Switch size="lg" />
          </View>

          <View style={styles.amountOptionContainer}>
            <Text style={styles.optionText}>Savings Amount</Text>
            <View style={styles.amountOptionRightContainer}>
              <Text style={styles.amountOptionText}>x1</Text>
              <ChevronRightIcon />
            </View>
          </View>
        </View>

        <View style={styles.steps}>
          <View style={styles.stepConfirm}>
            <CheckIcon />
            <Text style={styles.stepConfirmText}>You deactivated this rule, this rule only works if the toggle is on</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button style={styles.createButton}><Text style={styles.createButtonText}>Save</Text></Button>
          <Button style={styles.cancelButton}><Text style={styles.cancelButtonText}>Do it later</Text></Button>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#090909",
    opacity: 0.96,
    height: "100%",
  },
  mainContainer: {
    padding: "5%",
  },
  headerContainer: {
    alignItems: "center",
    // gap: 15,
    marginTop: "10%",
  },
  headingText: {
    color: "#F5F5F5",
    opacity: 0.8,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 18,
  },
  activeSavingsText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    marginTop: "10%",
  },
  amountOptionRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  amountOptionText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-Medium",
    fontSize: 14,
  },
  infoboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    marginTop: "5%",
    paddingVertical: "6%",
    backgroundColor: "#b4aaf2",
    borderRadius: 5,
  },
  inforowContainer: {
    gap: 10,
  },
  inforowHeadingText: {
    fontSize: 10,
    color: "black",
    fontFamily: "OpenSans-SemiBold",
  },
  inforowAmountText: {
    fontSize: 28,
    color: "black",
    fontFamily: "OpenSans-SemiBold",
  },
  inforowTimeText: {
    fontSize: 10,
    color: "black",
    fontFamily: "OpenSans-SemiBold",
  },
  savingsInfoContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
  infoText: {
    fontSize: 14,
    color: "#f5f5f5",
    fontFamily: "OpenSans-Medium",
  },
  optionsListContainer: {
    marginTop: "10%",
  },
  toggleOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#404040",
    paddingBottom: "5%",
  },
  amountOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5%",
  },
  optionText: {
    fontSize: 16,
    color: "#f5f5f5",
    fontFamily: "OpenSans-Medium",
  },
  steps: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: "15%",
  },
  stepsHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "OpenSans-Regular",
  },
  stepConfirm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  stepConfirmText: {
    fontSize: 14,
    color: "#f1f1f1",
    fontFamily: "OpenSans-Regular",
    opacity: 0.7,
  },
  footerContainer: {
    alignItems: "center",
    gap: 10,
    marginTop: "20%",
  },
  createButton: {
    width: "90%",
    backgroundColor: "#f5f5f5",
  },
  createButtonText: {
    color: "#090909",
    fontFamily: "OpenSans-SemiBold",
  },
  cancelButton: {
    width: "90%",
    backgroundColor: "transparent",
  },
  cancelButtonText: {
    color: "#7a7a7a",
    fontFamily: "OpenSans-SemiBold",
  },
});