import { TouchableOpacity, Text, Pressable } from "react-native";

type CustomButtonTypes = {
  title: String;
  handlePress: () => Function;
  containerStyles?: String;
  textStyles?: String;
  isLoading?: Boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonTypes) => {
  return (
    <Pressable
      className={`bg-secondary min-h-[62px] justify-center items-center rounded-xl ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
