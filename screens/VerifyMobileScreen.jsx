import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import CaptionText from "../ui/texts/CaptionText";
import TitleText from "../ui/texts/TitleText";
import InputVerification from "../ui/inputs/InputVerification";

const VerifyMobileScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TitleText text="Verify Your" color="#292D32" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-sharp" size={24} color="#99CC00" />
            </TouchableOpacity>
          </View>
          <TitleText text="Mobile Number" color="#99CC00" />

          <View style={styles.message}>
            <CaptionText
              text="We have sent you a verification code to your mobile number. This helps keep your account secure."
              color="#292D32"
            />

            <CaptionText text="" color="#292D32" />
            <CaptionText text="+91 9876543210" color="#99cc00" />
          </View>
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputs}>
            <InputVerification />
            <InputVerification />
            <InputVerification />
            <InputVerification />
            <InputVerification />
          </View>
          <View style={styles.footer}>
            <CaptionText text="Resend Code After" color="#292D32" />
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <CaptionText text=" 60Sec" color="#99CC00" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 50,
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    paddingBottom: 120,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 40,
    marginTop: 50,
  },
  message: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 50,
  },
  inputs: {
    width: "100%",
    paddingHorizontal: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  policy: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default VerifyMobileScreen;
