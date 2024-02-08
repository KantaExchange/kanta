import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonOutline = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#292D32",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#292D32",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ButtonOutline;
