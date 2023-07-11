import {
  View, Text, Button, Input,
} from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOtp, getUserToken } from "../../api/auth";
import { changeMobile, changeToken } from "../../redux/userSlice";


export default function GoldCreateAccount({ navigation }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isMobileDisabled, setIsMobileDisabled] = useState(false);

  const userState = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  function handleMobileChange(text) {
    const numStr = "0123456789";
    
    // if the entered character is not a digit, don't set the value
    if (!(numStr.includes(text[text.length - 1]))) {
      console.log(text);
      return;
    }

    setMobile(text);
    if (text.length >= 10 && !showOtp) {
      setShowOtp(true);
    } else {
      setShowOtp(false);
    }
  }

  async function handleSendOtp() {
    // setIsMobileDisabled(true);
    const otpResponse = await getOtp(mobile);
    console.log(otpResponse.data);
    setOtp(otpResponse.data.otp);
    dispatch(changeMobile(otpResponse.data.otp));
  }

  async function handleCreateAccount() {
    const response = await getUserToken(mobile, otp);
    dispatch(changeToken(response.data.token));
    navigation.navigate("GoldYourDetails");
  }

  return (
    <View style={styles.screenContainer}>

      <View style={styles.headerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Create an{"\n"}Account</Text>
        </View>
        <View style={styles.headerDescriptionContainer}>
          <Text style={styles.headerDescriptionText}>Save money for event big and small, known and unknown and always have enough</Text>
        </View>
      </View>

      <View style={styles.inputListContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Mobile Number</Text>
          <Input value={mobile} onChangeText={handleMobileChange} isDisabled={isMobileDisabled} />
          {
            showOtp ? <Button style={styles.createButton} onPress={handleSendOtp}><Text style={styles.createButtonText}>Send OTP</Text></Button> : <></>
          }
          
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>OTP</Text>
          <Input value={otp} onChangeText={text => setOtp(text)} />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Button style={styles.createButton} onPress={() => handleCreateAccount()}><Text style={styles.createButtonText}>Create an Account</Text></Button>
        {/* <Text style={styles.loginParentText}>Already have an account? <Text style={styles.loginText}>Log in</Text></Text> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
  headerContainer: {

  },
  headingContainer: {
    marginTop: "10%",
  },
  headingText: {
    fontFamily: "OpenSans-Bold",
    fontSize: 44,
    lineHeight: 44,
    color: "#090909",
  },
  headerDescriptionContainer: {
    marginTop: 5,
    marginBottom: "10%",
  },
  headerDescriptionText: {
    color: "#707070",
    fontFamily: "OpenSans-Regular",
  },
  inputListContainer: {
    marginBottom: "10%",
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  inputText: {
    color: "#090909",
    fontFamily: "OpenSans-SemiBold",
    opacity: 0.6,
    fontSize: 14,
  },
  footerContainer: {
    alignItems: "center",
    gap: 10,
  },
  createButton: {
    width: "100%",
    backgroundColor: "#000000",
  },
  createButtonText: {
    color: "#BEBEBE",
    fontFamily: "OpenSans-SemiBold",
  },
  loginParentText: {
    color: "#A7A7A7",
    fontFamily: "OpenSans-Medium",
    fontSize: 14,
  },
  loginText: {
    color: "#1366D4",
    opacity: 0.8,
  }
});