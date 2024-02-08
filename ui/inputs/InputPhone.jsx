import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const InputPhone = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (value) => {
    setCountryCode(value);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={countryCode}
        onValueChange={handleCountryCodeChange}
        style={styles.picker}
      >
        <Picker.Item label="+1" value="+1" />
        <Picker.Item label="+234" value="+234" />
        <Picker.Item label="+44" value="+44" />
        {/* Add more country codes as needed */}
      </Picker>
      <TextInput
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholder="Phone number"
        keyboardType="phone-pad"
        style={styles.textInput}
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
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    overflow: "hidden",
  },
  picker: {
    width: 120,
  },
  textInput: {
    width: "90%",
    fontSize: 18,
  },
});

export default InputPhone;
