import { Dispatch, SetStateAction, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

import { images } from "../../constants";

type formDataType = {
  email: String;
  password: String;
};

const SignIn = () => {
  // States
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    console.log("values inside handle submit", formData);
    return () => null;
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[75vh] px-4 my-6">
          <Image source={images.logo} className="w-[115px] h-[35px]" />
          <Text className="text-white text-2xl text-semibold font-psemibold mt-10">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            placeholder="Enter Email"
            value={formData}
            handleChangeText={(e) =>
              setFormData((object) => ({ ...object, email: e }))
            }
          />
          <FormField
            title="Password"
            placeholder="Enter Password"
            value={formData}
            handleChangeText={(e) =>
              setFormData((object) => ({ ...object, password: e }))
            }
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-7"
            handlePress={handleSubmit}
            isLoading={isLoading}
          />

          <View className="pt-5 justify-center flex-row gap-2">
            <Text className="text-sm text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="font-psemibold text-secondary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
