import { View, Text, StyleSheet } from "react-native";

const HeaderText = ({ text, color }) => {
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
    fontSize: 44,
    fontWeight: "bold",
  },
});

export default HeaderText;
