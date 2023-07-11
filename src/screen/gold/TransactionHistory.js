import {
  View, Text, Button, Input, ChevronLeftIcon, TextArea, ChevronRightIcon,
} from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

function Transaction() {
  return (
    <></>
  );
}

export default function GoldTransactionHistory({ navigation }) {
  const [transactions, setTransactions] = useState(["dummy"]);

  return (
    <View style={styles.screenContainer}>
      <ChevronLeftIcon />

      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Savings History</Text>
        </View>

        <View style={styles.inputListContainer}>
          {/* <ul> */}
          {/* {transactions.map((transaction, index) => {
            return (<View key={index}><Text>{transaction}</Text></View>);
          // })} */}
          {/* </ul> */}
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
    padding: "5%",
    // flexDirection: "row",
    // justifyContent: "space-between",
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  inputText: {
    color: "#d9d9d9",
    fontFamily: "OpenSans-SemiBold",
    // opacity: 0.7,
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