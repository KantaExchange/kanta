import { View, StyleSheet } from "react-native";

const HorizontalLine = ({ color }) => {
  return <View style={[styles.container, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: "100%",
    marginTop: 20,
  },
});

export default HorizontalLine;
