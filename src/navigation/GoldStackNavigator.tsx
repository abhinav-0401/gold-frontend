import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoldCreateAccount from "../screen/gold/CreateAccount";
import GoldYourDetails from "../screen/gold/Details";
// import GoldHomeScreen from "../screen/gold/HomeScreen";
import GoldBankDetails from "../screen/gold/profile/BankDetails";
import GoldProfileSettings from "../screen/gold/profile/ProfileSettings";

const Stack = createNativeStackNavigator();

export default function GoldStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="GoldCreateAccount" component={GoldCreateAccount} />
      <Stack.Screen name="GoldYourDetails" component={GoldYourDetails} />
      {/* <Stack.Screen name="GoldHomeScreen" component={GoldHomeScreen} /> */}
      <Stack.Screen name="GoldBankDetails" component={GoldBankDetails} />
      <Stack.Screen name="GoldProfileSettings" component={GoldProfileSettings} />
    </Stack.Navigator>
  );
}