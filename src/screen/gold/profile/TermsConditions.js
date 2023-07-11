import {
  View, Text, Button, Input, ChevronLeftIcon, TextArea, ChevronRightIcon, 
} from "native-base";
import { StyleSheet, SafeAreaView, ScrollView, } from "react-native";

export default function GoldTermsConditions({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screenContainer}>
          <ChevronLeftIcon />

          <View style={styles.mainContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Terms & Conditions</Text>
            </View>

            <View style={styles.inputListContainer}>
              <Text style={styles.introText}>Welcome to our savings app. By using this app, you agree to the following terms and conditions:</Text>
              <View style={styles.pointsListContainer}>
                <Text style={styles.introText}>1. Eligibility: To use our savings app, you must be at least 18 years old and legally eligible to enter into a contract. By using our app, you confirm that you meet this eligibility criteria.</Text>
                <Text style={styles.introText}>2. Account Information: You will be required to create an account on our app to use the services. You agree to provide accurate and complete information during the registration process, and to keep your account information up-to-date.</Text>
                <Text style={styles.introText}>3. Security: You are responsible for maintaining the confidentiality of your account information, including your password. You agree not to share your password with anyone or allow anyone else to access your account. We will not be liable for any loss or damage arising from unauthorized access to your account.</Text>
                <Text style={styles.introText}>4. Savings Goals: Our app allows you to set savings goals and track your progress towards achieving them. While we will make every effort to help you achieve your savings goals, we do not guarantee that you will reach your goals. You are solely responsible for your savings decisions and the results that you achieve.</Text>
                <Text style={styles.introText}>5. Fees: Our app may charge fees for certain services. These fees will be clearly disclosed to you before you use the service. By using the service, you agree to pay the fees associated with that service.</Text>
                <Text style={styles.introText}>6. Termination: You may terminate your account at any time by deleting the app. We reserve the right to terminate your account or suspend your access to the app at any time, without notice or liability, for any reason, including but not limited to a violation of these terms and conditions.</Text>
                <Text style={styles.introText}>7. Limitation of Liability: Our app and its content are provided on an "as is" and "as available" basis. We do not guarantee that the app will be error-free, uninterrupted, or secure. We will not be liable for any damages of any kind arising from the use of this app, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</Text>
                <Text style={styles.introText}>8. Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which you reside.</Text>
                <Text style={styles.introText}>9. Modification: We may modify these terms and conditions at any time, without notice. Your continued use of the app after any such modification constitutes your acceptance of the modified terms and conditions.</Text>
              </View>
              <Text style={styles.introText}>By using our savings app, you acknowledge that you have read and agree to these terms and conditions. If you do not agree to these terms and conditions, please do not use the app.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  },
  introText: {
    color: "#F5F5F5",
    opacity: 0.8,
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
  },
  pointsListContainer: {
    paddingLeft: 25,
    gap: 15,
  }
});