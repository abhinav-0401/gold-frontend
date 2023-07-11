import {
  View, StyleSheet, Text, Image,
} from "react-native";
import {
  Button, ChevronLeftIcon, Slider, ArrowForwardIcon,
} from "native-base";
import { useState } from "react";

import AmountSuggestions from "../../components/AmountSuggestions";

export default function GoldSaveMoney({ navigation }) {
  const bitcoinImg = require("../../static/icons/bitcoin-circle.png");
  const pencilImg = require("../../static/icons/pencil.png");

  const [amount, setAmount] = useState("");

  return (
    <View style={styles.screenContainer}>

      <View style={styles.mainContainer}>
        <ChevronLeftIcon />

        <View style={styles.amountContainer}>
          <Text style={styles.headingText}>Save Money</Text>
          <Image source={bitcoinImg} style={styles.image} />
          <View style={styles.amountEditContainer}><Text style={styles.amountEditText}><Text style={styles.rupeesText}>Rs</Text>100</Text></View>

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
      </View>

      <View style={styles.footerContainer}>
        <Button style={styles.createButton}><View style={styles.createButtonParentContainer}><Text style={styles.createButtonText}>Continue</Text><ArrowForwardIcon /></View></Button>
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
    marginTop: "10%",
  },
  image: {
    marginTop: "5%",
  },
  headingText: {
    color: "#F5F5F5",
    opacity: 0.8,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 18,
  },
  amountEditContainer: {
    marginTop: "5%",
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
    marginTop: "5%",
  },
  sliderNumText: {
    color: "#F5F5F5",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 12,
  },
  suggestionsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: "10%",
  },
  footerContainer: {
    alignItems: "center",
    gap: 10,
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