
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import HeaderText from "../ui/texts/HeaderText";
import CaptionText from "../ui/texts/CaptionText";
import InputText from "../ui/inputs/InputText";
import ButtonPlain from "../ui/buttons/ButtonPlain";
import ButtonOutline from "../ui/buttons/ButtonOutline";
import HorizontalLine from "../ui/lines/HorizontalLine";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        
      >
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
            <HeaderText text="Welcome" color="#292D32" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="close" size={24} color="#99CC00" />
            </TouchableOpacity>
          </View>
          <HeaderText text="Back" color="#99CC00" />
        </View>
        <View style={styles.inputs}>
          <InputText placeholder="Enter Your Email" />
          <InputText placeholder="Enter Your Password" secureTextEntry={true} />
          <ButtonPlain text="Login" />
          <HorizontalLine color="#E5E5E5" />
          <ButtonOutline text="Restore Account" />
        </View>
        <View style={styles.footer}>
          <CaptionText text="Don't have an account?" color="#292D32" />
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <CaptionText text="Sign Up" color="#99CC00" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    justifyContent: "space-around",
    width: "100%",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
  inputs: {
    width: "100%",
    paddingHorizontal: 40,
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

export default LoginScreen;
