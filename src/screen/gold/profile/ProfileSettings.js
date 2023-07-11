import {
  View, Text, Button, Input, ChevronLeftIcon, TextArea
} from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../api/profile";
import { changeName } from "../../../redux/userSlice";

export default function GoldProfileSettings() {
  const userState = useSelector(state => state.user.value);
  console.log(userState);
  const dispatch = useDispatch();
  
  const [name, setName] = useState(!!userState.name ? userState.name : "");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");

  async function handleProfileUpdate() {
    const response = await updateUser({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
      dob: dob,
      pincode: pincode,
      gender: gender,
      email: email,
    }, userState.token);
    dispatch(changeName(`${response.data.first_name} ${response.data.last_name}`));
  }

  return (
    <View style={styles.screenContainer}>
      <ChevronLeftIcon />

      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Profile Settings</Text>
        </View>

        <View style={styles.inputListContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Full Name</Text>
            <Input color={"gray.400"} defaultValue={userState.name} value={name} onChangeText={text => setName(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>DOB</Text>
            <Input color={"gray.400"} value={dob} onChangeText={text => setDob(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <Input color={"gray.400"} value={email} onChangeText={text => setEmail(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Gender</Text>
            <Input color={"gray.400"} value={gender} onChangeText={text => setGender(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Pincode</Text>
            <Input color={"gray.400"} value={pincode} onChangeText={text => setPincode(text)} />
          </View>
          {/* <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Address</Text>
            <TextArea color={"gray.400"} />
          </View> */}
        </View>


        <View style={styles.footerContainer}>
          <Button style={styles.createButton} onPress={handleProfileUpdate}>
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