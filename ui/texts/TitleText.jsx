import { View, Text, StyleSheet } from "react-native";

const TitleText = ({ text, color }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default TitleText;
