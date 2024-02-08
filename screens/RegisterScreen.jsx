import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import CaptionText from "../ui/texts/CaptionText";
import TitleText from "../ui/texts/TitleText";
import InputText from "../ui/inputs/InputText";
import InputPhone from "../ui/inputs/InputPhone";
import ButtonPlain from "../ui/buttons/ButtonPlain";
import SocialButtonPlain from "../ui/buttons/SocialButtonPlain";
import HorizontalLine from "../ui/lines/HorizontalLine";

const RegisterScreen = ({ navigation }) => {
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
            <TitleText text="Create an account" color="#292D32" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="close" size={24} color="#99CC00" />
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputs}>
            <InputText placeholder="Enter Full Name" />
            <InputText placeholder="Enter Email" />
            <InputPhone placeholder="Enter Phone Number" />
            <InputText placeholder="Enter Password" secureTextEntry={true} />
            <InputText placeholder="Confirm Password" secureTextEntry={true} />
            <ButtonPlain
              text="Continue"
              onPress={() => navigation.navigate("VerifyMobileScreen")}
            />
            <View style={styles.policy}>
              <CaptionText text="By creating an account, you agree to our" />
              <CaptionText
                text="Terms of Service and Privacy Policy"
                textDecorationLine={"underline"}
              />
            </View>
            <HorizontalLine color="#E5E5E5" />
            <SocialButtonPlain text="Continue with Google" icon="google" />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <CaptionText text="Already have an account?" color="#292D32" />
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <CaptionText text="Login" color="#99CC00" />
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "column",
    paddingBottom: 40,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 40,
    marginTop: 50,
  },
  inputs: {
    width: "100%",
    paddingHorizontal: 40,
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

export default RegisterScreen;
