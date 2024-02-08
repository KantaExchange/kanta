import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native";

import { Fontisto, AntDesign } from "@expo/vector-icons";

import HeaderText from "../ui/texts/HeaderText";
import ButtonPlain from "../ui/buttons/ButtonPlain";
import ButtonOutline from "../ui/buttons/ButtonOutline";
import CaptionText from "../ui/texts/CaptionText";

const IntroScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderText text="Greetings from" color="black" />
        <HeaderText text="Kanta" color="#99CC00" />
      </View>
      <View style={styles.buttons}>
        <ButtonPlain
          text="Create an account"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
        <ButtonOutline
          text="Login "
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <View style={styles.languages}>
          <Fontisto name="world-o" size={24} color="#292D32" />
          <CaptionText text="English" color="#292D32" />
          <AntDesign name="down" size={24} color="#292D32" />
        </View>
      </View>
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
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
  buttons: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  languages: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
  },
});

export default IntroScreen;
