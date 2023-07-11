import {
  View, Text, Button, Input, 
} from "native-base";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../api/profile";
import { goldRegister } from "../../api/auth";
import { changeName } from "../../redux/userSlice";

export default function GoldYourDetails({ navigation }) {

  const [name, setName]= useState("");
  const [dob, setDob] = useState("");
  const [pincode, setPincode] = useState("");
  const [gender, setGender] = useState("");

  const userState = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  // get the user auth token, send the updated detail req, then store the data
  async function handleCreateAccount() {
    console.log(userState.token);
    const response = await updateUser({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
      dob: dob,
      pincode: pincode,
      gender: gender,
    }, userState.token);
    const goldResponse = await goldRegister(userState.token);
    dispatch(changeName(`${response.data.first_name} ${response.data.last_name}`));
    // navigation.navigate("GoldBankDetails");
    navigation.navigate("GoldProfileSettings");
  }

  return (
    <View style={styles.screenContainer}>

      <View style={styles.headerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Your{"\n"}Details</Text>
        </View>
        <View style={styles.headerDescriptionContainer}>
          <Text style={styles.headerDescriptionText}>Spare a moment to tell us a little more about yourself.</Text>
        </View>
      </View>

      <View style={styles.inputListContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Full Name</Text>
          <Input value={name} onChangeText={text => setName(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>DOB (YYYY-MM-DD)</Text>
          <Input value={dob} onChangeText={text => setDob(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Pincode</Text>
          <Input value={pincode} onChangeText={text => setPincode(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Gender</Text>
          <Input value={gender} onChangeText={text => setGender(text.toLowerCase())}/>
        </View>
      </View>

      {/* <View mb="5">
        <Text style={{ fontSize: 16, fontWeight: 700, lineHeight: 19.07 }} fontFamily={"OpenSans-SemiBold"}>Annual Earnings</Text>
        <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
          <View p={'2'}>
            <Chip title="1-5 Lakhs" type="outline" disabled containerStyle={styles.chip} />
          </View>
          <View p={'2'}>
            <Chip title="5-10 Lakhs" type="outline" disabled />
          </View>
          <View p={'2'} style={{ flexWrap: 'wrap' }}>
            <Chip title="1 Lakhs" disabled type="outline" />
          </View>

        </View>
        <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
          <View p={'2'}>
            <Chip title="10-25 Lakhs" type="outline" disabled />
          </View>
          <View p={'2'}>
            <Chip title="25 Lakhs+" type="outline" disabled />
          </View>

        </View>
      </View> */}

      {/* <View mb="5">
        <Text style={{ fontSize: 16, fontWeight: 700, lineHeight: 19.07 }} fontFamily={"OpenSans-SemiBold"}>Employment Details</Text>
        <View style={{ flexDirection: 'row', alignContent: 'flex-start', flexWrap: "wrap" }}>
          <View p={'2'}>
            <Chip title="Government Employee" disabled type="outline" />
          </View>
          <View p={'2'}>
            <Chip title="Self Employed" type="outline" disabled />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
          <View p={'2'}>
            <Chip title="Business" type="outline" disabled />
          </View>
          <View p={'2'}>
            <Chip title="Private Sector" type="outline" disabled />
          </View>
          <View p={'2'}>
            <Chip title="Others" type="outline" disabled />
          </View>
        </View>
      </View> */}

      <View style={styles.footerContainer}>
        <Button style={styles.createButton} onPress={handleCreateAccount}>
          <Text style={styles.createButtonText}>Create an Account</Text>
        </Button>
        <Text style={styles.loginParentText}>Already have an account? <Text style={styles.loginText}>Log in</Text></Text>
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
    marginBottom: "5%",
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
  },
  chip: {
    borderRadius: 0,
    // backgroundColor: "black",
  }
});