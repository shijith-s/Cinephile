import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { getMoviePosterUrl } from "@/services/api";
import icons from "@/constants/icons";

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) => {
  const rating = (vote_average / 2).toFixed(1);
  const releaseYear = new Date(release_date).getFullYear();
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{ uri: getMoviePosterUrl(poster_path) }}
          className="w-full h-52 rounded-lg bg-dark-100"
          resizeMode="cover"
        />
        <Text
          className="text-white text-sm font-semibold mt-2"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-1">
            <Image source={icons.star} className="size-4" />
            <Text className="text-light-100 text-xs mt-1">{rating}</Text>
          </View>
          <Text className="text-light-100 text-xs mt-1">{releaseYear}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
