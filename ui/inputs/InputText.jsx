import { View, Text, TextInput, StyleSheet } from "react-native";

const InputText = ({ placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
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
    height: 60,
  },
  textInput: {
    width: "100%",
    fontSize: 18,
  },
});

export default InputText;
