import {
  View, Text, Button, Input, ChevronLeftIcon,
} from "native-base";
import {
  Image,
} from "react-native";
import { StyleSheet } from "react-native";

export default function GoldNomineeDetails() {
  const newImg = require("../../../static/icons/new.png");

  return (
    <View style={styles.screenContainer}>
      <ChevronLeftIcon />

      <View style={styles.mainContainer}>

        <View style={styles.layoutContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Nominee Details</Text>
          </View>

          <View style={styles.inputListContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Full Name</Text>
              <Input color={"gray.400"} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Relation</Text>
              <Input color={"gray.400"} />
            </View>
          </View>

          <View style={styles.addNewContainer}>
            <Image source={newImg} />
            <Text style={styles.inputText}>Add New Nominee</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button style={styles.createButton}><Text style={styles.createButtonText}>Save</Text></Button>
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
  mainContainer: {
    justifyContent: "space-between",
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
    marginBottom: "5%",
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
  },
  addNewContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  }
});