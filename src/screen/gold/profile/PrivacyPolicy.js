import {
  View, Text, Button, Input, ChevronLeftIcon, TextArea, ChevronRightIcon,
} from "native-base";
import { StyleSheet, SafeAreaView, ScrollView, } from "react-native";

export default function GoldPrivacyPolicy() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screenContainer}>
          <ChevronLeftIcon />

          <View style={styles.mainContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Privacy Policy</Text>
            </View>

            <View style={styles.inputListContainer}>
              <Text style={styles.introText}>We take your privacy seriously and are committed to protecting your personal information. This privacy policy describes how we collect, use, and share your information when you use our app.</Text>
              <View style={styles.pointsListContainer}>
                <Text style={styles.introText}>1. Information We Collect: We may collect personal information that you provide to us, such as your name, email address, and other contact information. We may also collect information about your device, location, and usage of the app.</Text>
                <Text style={styles.introText}>2. Use of Information: We use the information we collect to provide and improve our app and services, to communicate with you, and to comply with legal and regulatory requirements. We may also use the information to personalize your experience and provide targeted advertisements and promotions.</Text>
                <Text style={styles.introText}>3. Sharing of Information: We do not sell, rent, or trade your personal information to third parties. We may share your information with our service providers who assist us in providing the app and services. We may also share your information in response to legal process, to protect our rights or property, or to comply with legal obligations.</Text>
                <Text style={styles.introText}>4. Data Retention: We will retain your information for as long as necessary to fulfill the purposes for which it was collected, or as required by law. We may retain aggregated and anonymous data for analytics purposes.</Text>
                <Text style={styles.introText}>5. Security: We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage can be guaranteed to be 100% secure.</Text>
                <Text style={styles.introText}>6. Children: Our app is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under the age of 18.</Text>
                <Text style={styles.introText}>7. Your Rights: You have the right to access and correct your personal information, to request that we delete your personal information, and to object to or restrict the processing of your personal information.</Text>
                <Text style={styles.introText}>8. Changes to Privacy Policy: We may modify this privacy policy at any time, without notice. Your continued use of the app after any such modification constitutes your acceptance of the modified privacy policy.</Text>
              </View>
              <Text style={styles.introText}>If you have any questions or concerns about our privacy policy or the collection, use, or disclosure of your personal information, please contact us at [insert contact information].</Text>
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