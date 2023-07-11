import {
  View, Text, Button, Input, ChevronLeftIcon,
} from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { registerBank } from "../../../api/profile";

export default function GoldBankDetails({ navigation }) {
  const [name, setName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [number, setnumber] = useState("");

  async function handleBankRegistration() {
    const response = await registerBank({ name, ifsc, number });
  }

  return (
    <View style={styles.screenContainer}>
      <ChevronLeftIcon />

      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Bank Details</Text>
        </View>

        <View style={styles.inputListContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Bank Name</Text>
            <Input color={"gray.400"} value={name} onChangeText={text => setName(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>IFSC Code</Text>
            <Input color={"gray.400"} value={ifsc} onChangeText={text => setIfsc(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Ac Number</Text>
            <Input color={"gray.400"} value={number} onChangeText={text => setnumber(text)} />
          </View>
        </View>


        <View style={styles.footerContainer}>
          <Button style={styles.createButton} onPress={handleBankRegistration}>
            <Text style={styles.createButtonText}>Save</Text>
          </Button>
          <Button style={styles.cancelButton}><Text style={styles.cancelButtonText}>Cancel</Text></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: "5%",
    backgroundColor: "#000000",
    height: "100%",
  },
  headingContainer: {
    marginTop: "8%",
    alignItems: "center",
    marginBottom: "7%",
  },
  headingText: {
    color: "#F5F5F5",
    opacity: 0.8,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 18,
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
    color: "#d9d9d9",
    fontFamily: "OpenSans-SemiBold",
    opacity: 0.7,
    fontSize: 14,
  },
  footerContainer: {
    alignItems: "center",
    gap: 8,
  },
  createButton: {
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  createButtonText: {
    color: "#090909",
    fontFamily: "OpenSans-SemiBold",
  },
  cancelButton: {
    width: "100%",
    backgroundColor: "transparent",
  },
  cancelButtonText: {
    color: "#7a7a7a",
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