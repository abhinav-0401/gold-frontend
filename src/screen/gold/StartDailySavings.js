import {
  View, StyleSheet, Text, Image,
} from "react-native";
import {
  Button, ChevronLeftIcon, Slider, ArrowForwardIcon, Switch,
} from "native-base";
import { useState } from "react";

import AmountSuggestions from "../../components/AmountSuggestions";

export default function GoldStartDailySavings({ navigation }) {
  const bitcoinImg = require("../../static/icons/bitcoin-circle.png");
  const pencilImg = require("../../static/icons/pencil.png");

  const [amount, setAmount] = useState("100");

  // the backend doesn't really do anything about the autopay,
  // other than record when autopay is turned ON for a particular user
  // it's the frontend that has to actually get this aforementioned autopay status, and then SEND THE ACTUAL REQUEST
  function handleSetupAutopay() {
    fetch("127.0.0.1:8000/gold/start-autopay/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => console.log(res))
      .then(err => console.log(err));
  }

  

  return (
    <View style={styles.screenContainer}>
      
      <View style={styles.mainContainer}>
        <ChevronLeftIcon />

        <View style={styles.amountContainer}>
          <Text style={styles.headingText}>Start Saving Daily</Text>
          <Image source={bitcoinImg} style={styles.image} />
          <View style={styles.amountEditContainer}><Text style={styles.amountEditText}><Text style={styles.rupeesText}>Rs</Text>{amount}</Text></View>

        {/* <View> */}
          <Slider w="5/6" maxW="400" defaultValue={1000} minValue={100} maxValue={10000} accessibilityLabel="hello world" step={10} marginTop="5%">
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
          </Slider>
          <View style={styles.sliderNumContainer}>
            <Text style={styles.sliderNumText}>Rs 100</Text>
            <Text style={styles.sliderNumText}>Rs 10,000</Text>
          </View>
        {/* </View> */}
            
          <View style={styles.suggestionsContainer}>
            <AmountSuggestions style={styles.suggestionBox} amount={"100"} setValue={setAmount} active={false} />
            <AmountSuggestions style={styles.suggestionBox} amount={"500"} setValue={setAmount} active={true} />
            <AmountSuggestions style={styles.suggestionBox} amount={"1000"} setValue={setAmount} active={false} />
          </View>
        </View>

        <View style={styles.savingsInfoContainer}>
          <Text style={styles.infoText}>At this rate you will have <Text style={{ fontFamily: "OpenSans-Bold" }}>30.5 lacs in 20 yrs</Text></Text>
        </View>
      </View>

      <View style={styles.toggleOptionContainer}>
        <Text style={styles.optionText}>By when do you want{"\n"}to achieve this</Text>
        <Button style={styles.dateButton}><Text style={styles.dateButtonText}>May, 2023</Text></Button>
      </View>

      <View style={styles.recommendedHeadingContainer}>
        <Text style={styles.recommendedHeadingText}>Recommended</Text>
      </View>

      <View style={styles.roundupOptionContainer}>
        <View style={styles.roundupOptionLeftContainer}>
          <Text style={styles.roundupOptionText}>Round Ups</Text>
          <Text style={styles.roundupInfoText}>Roundup your expense to{"\n"}the nearest rupee</Text>
        </View>
        <Switch size="lg" />
        
      </View>

      <View style={styles.footerContainer}>
        <Button style={styles.createButton}>
          <View style={styles.createButtonParentContainer}>
            <Text style={styles.createButtonText}>Continue</Text><ArrowForwardIcon />
          </View>
        </Button>
        <Button style={styles.cancelButton}><Text style={styles.cancelButtonText}>Cancel</Text></Button>
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
    marginTop: "5%",
  },
  image: {
    marginTop: "3%",
  },
  headingText: {
    color: "#F5F5F5",
    opacity: 0.8,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 18,
  },
  amountEditContainer: {
    marginTop: "3%",
  },
  amountEditText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 38,
  },
  rupeesText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
  },
  sliderNumContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3%",
  },
  sliderNumText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 12,
  },
  savingsInfoContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  infoText: {
    fontSize: 14,
    color: "#f5f5f5",
    opacity: 0.8,
    fontFamily: "OpenSans-Medium",
  },
  toggleOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#404040",
    paddingBottom: "5%",
    padding: "3%",
  },
  optionText: {
    fontSize: 14,
    color: "#f5f5f5",
    fontFamily: "OpenSans-Medium",
  },
  dateButton: {
    backgroundColor: "#f5f5f5"
  },
  dateButtonText: {
    color: "black",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 12,
  },
  recommendedHeadingContainer: {
    width: "100%",
    paddingVertical: "3%",
    paddingHorizontal: "4%",
    backgroundColor: "#b4aaf2",
  },
  recommendedHeadingText: {
    color: "black",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  roundupOptionLeftContainer: {
    // alignItems: "center",
    gap: 5,
  },
  roundupOptionText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-Medium",
    fontSize: 16,
  },
  roundupOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingHorizontal: "5%",
    alignItems: "flex-start",
  },
  roundupInfoText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 12,
    color: "#f5f5f5",
    opacity: 0.6,
  },
  suggestionsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: "5%",
  },
  footerContainer: {
    alignItems: "center",
    gap: 10,
    marginTop: "3%",
  },
  createButton: {
    width: "90%",
    backgroundColor: "#f5f5f5",
  },
  createButtonParentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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