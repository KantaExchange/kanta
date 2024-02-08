import { View, Text, StyleSheet } from "react-native";

const CaptionText = ({ text, color, textDecorationLine }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color, textDecorationLine: textDecorationLine }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
  },
});

export default CaptionText;
