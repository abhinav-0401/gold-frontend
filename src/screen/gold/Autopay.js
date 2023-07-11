import {
  View, StyleSheet, Text, Image,
} from "react-native";
import {
  Button, ChevronLeftIcon, WarningOutlineIcon, InfoOutlineIcon, CheckIcon,
} from "native-base";
import { useState } from "react";

export default function GoldAutopay({ navigation }) {
  const phonepeImg = require("../../static/icons/phonepe.png");
  const gpayImg = require("../../static/icons/gpay.png");
  const paytmImg = require("../../static/icons/paytm.png");
  const addImg = require("../../static/icons/addnew.png");

  return (
    <View style={styles.screenContainer}>
      
      <View style={styles.mainContainer}>
        <ChevronLeftIcon />

        <View style={styles.amountContainer}>
          <Text style={styles.headingText}>Setup Daily Savings</Text>
          <View style={styles.amountEditContainer}><Text style={styles.amountEditText}>100</Text></View>
          <View style={styles.setupUpiTextContainer}><Text style={styles.setupUpiText}>UPI auto pay</Text></View>
        </View>

        <Text style={styles.paymentGridHeadingText}>Choose Payment App</Text>
        <View style={styles.paymentGridContainer}>
          <View style={styles.paymentAppContainer}>
            <Image source={phonepeImg} />
            <Text style={styles.paymentAppText}>PhonePe</Text>
          </View>
          <View style={styles.paymentAppContainer}>
            <Image source={paytmImg} />
            <Text style={styles.paymentAppText}>Paytm</Text>
          </View>
          <View style={styles.paymentAppContainer}>
            <Image source={gpayImg} />
            <Text style={styles.paymentAppText}>GPay</Text>
          </View>
          <View style={styles.paymentAppContainer}>
            <Image source={addImg} />
            <Text style={styles.paymentAppText}>Add new</Text>
          </View>
        </View>

        <View style={styles.steps}>
          <View style={styles.stepConfirm}>
            <InfoOutlineIcon />
            <Text style={styles.stepConfirmText}>Add or modify your automatic investment settings</Text>
          </View>
          <View style={styles.stepConfirm}>
            <CheckIcon />
            <Text style={styles.stepConfirmText}>Complete the payment by selecting the bank and entering the UPI PIN</Text>
          </View>
          <View style={styles.stepConfirm}>
            <WarningOutlineIcon />
            <Text style={styles.stepConfirmTextFinal}>Steps to confirm your payment</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button style={styles.createButton} onPress={() => navigation.navigate("gold-home-final")}>
            <Text style={styles.createButtonText}>Setup AutoPay</Text>
          </Button>
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
  amountContainer: {
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
  amountEditText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 38,
    marginTop: "10%",
  },
  setupUpiText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    marginTop: "5%",
  },
  paymentGridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  paymentAppContainer: {
    gap: 20,
    alignItems: "center",
  },
  paymentAppText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-Medium",
    fontSize: 14,
    opacity: 0.9,
  },
  paymentGridHeadingText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    marginTop: "15%",
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
  stepConfirmTextFinal: {
    fontSize: 14,
    color: "#f5f5f5",
    fontFamily: "OpenSans-SemiBold",
  },
  footerContainer: {
    alignItems: "center",
    gap: 10,
    marginTop: "15%",
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