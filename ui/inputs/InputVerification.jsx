import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

const InputVerification = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (text) => {
    if (text.length <= 1) {
      setCode(text);
    }
  };

  return (
      <TextInput
        value={code}
        onChangeText={handleCodeChange}
        keyboardType="numeric"
        maxLength={1}
        style={styles.input}
      />
  );
};

const styles = StyleSheet.create({
    input: {
        height:50,
        width: 50,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
    },
});

export default InputVerification;
