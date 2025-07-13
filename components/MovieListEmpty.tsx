import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import theme from "@/constants/theme";

interface Props {
  searchTerm?: string;
  loading?: boolean;
  error?: Error | null;
}

const MovieListEmpty = ({ searchTerm, loading, error }: Props) => {
  const isEmpty = !loading && !error;
  const isSearchTermPresent = searchTerm?.trim();
  return (
    <View className="flex-1 items-center justify-center">
      {loading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.activityIndicator}
        />
      )}
      {error && (
        <Text className="text-white text-center">Error: {error?.message}</Text>
      )}
      {isEmpty && (
        <View className="mt-10 px-5 flex-1 h-full items-center justify-center">
          <Text className="text-gray-500 text-center">
            {isSearchTermPresent
              ? `No Movies Found for "${searchTerm}"`
              : "Search for a movie"}
          </Text>
        </View>
      )}
    </View>
  );
};

export default MovieListEmpty;
