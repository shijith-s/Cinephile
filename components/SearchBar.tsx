import { View, Image, TextInput } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import theme from "@/constants/theme";

interface Props {
  value?: string;
  placeholder: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ value, placeholder, onPress, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-6 py-2">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={theme.colors.light.l300}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.light.l200}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
