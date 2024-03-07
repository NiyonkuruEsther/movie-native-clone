import { View, Text, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { widthFull } from "../../screens/Home";

const InputLabel = ({ iconName, label, secureTextEntry, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ width: widthFull - 40 }}>
      <TextInput
        label={label}
        mode="flat"
        textColor="white"
        secureTextEntry={!showPassword && secureTextEntry}
        onChangeText={onChange}
        value={value}
        right={
          <TextInput.Icon
            icon={
              !secureTextEntry ? iconName : showPassword ? "eye" : "eye-off"
            }
            size={25}
            color="#FDD031"
            style={{ paddingHorizontal: 0 }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        style={{
          backgroundColor: "transparent",
          paddingHorizontal: 0,
          color: "white"
        }}
        theme={{
          colors: {
            primary: "#C2C3C7",
            text: "black",
            underlineColor: "transparent"
          }
        }}
      />
    </View>
  );
};

export default InputLabel;
