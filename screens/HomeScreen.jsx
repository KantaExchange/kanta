import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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
});

export default HomeScreen;
