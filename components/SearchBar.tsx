import { View, Image, TextInput } from "react-native";
import React, { useCallback, useRef } from "react";
import { useFocusEffect } from "expo-router";
import icons from "@/constants/icons";
import theme from "@/constants/theme";

interface Props {
  value?: string;
  placeholder: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  autoFocus?: boolean;
}

const SearchBar = ({
  value,
  placeholder,
  onPress,
  onChangeText,
  autoFocus,
}: Props) => {
  const inputRef = useRef<TextInput>(null);

  // Ensure the input is focused every time the containing screen is focused
  useFocusEffect(
    useCallback(() => {
      if (autoFocus) {
        const timeout = setTimeout(() => {
          inputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timeout);
      }
    }, [autoFocus])
  );

  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-6 py-2">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={theme.colors.light.l300}
      />
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        placeholderTextColor={theme.colors.light.l200}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
