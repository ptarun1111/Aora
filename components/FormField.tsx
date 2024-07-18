import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";

import { icons } from "../constants";

type FormFieldProps = {
  title: String;
  placeholder: String;
  value: String;
  handleChangeText: (e: React.SyntheticEvent) => void;
  otherStyles?: String;
};

const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  // States
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`my-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-p-medium mb-1">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base justify-start"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
