import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { widthFull } from "../../screens/Home";

const InputLabel = ({ iconName, label, secureTextEntry, onChange, value }) => {
  return (
    <View style={{ width: widthFull - 40 }}>
      <TextInput
        label={label}
        mode="flat"
        textColor="white"
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        value={value}
        right={
          <TextInput.Icon
            icon={iconName}
            size={25}
            color="#FDD031"
            style={{ paddingHorizontal: 0 }}
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
            color: "black",
            underlineColor: "transparent"
          }
        }}
      />
    </View>
  );
};

export default InputLabel;
