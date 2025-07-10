import { View, Image, TextInput } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import theme from "@/constants/theme";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={theme.colors.light.l300}
      />
      <TextInput
        placeholder={placeholder}
        value={""}
        onPress={onPress}
        onChangeText={(text) => {
          console.log(text);
        }}
        placeholderTextColor={theme.colors.light.l200}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
