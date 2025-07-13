import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getMoviePosterUrl } from "@/services/api";
import useFetchDetails from "@/services/useFetchDetails";
import icons from "@/constants/icons";
import { getMovieDetails } from "@/utils/movieUtils";
import MovieInfo from "@/components/MovieInfo";
import theme from "@/constants/theme";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movieDetails, loading } = useFetchDetails(id as string);

  const {
    title,
    posterPath,
    releaseYear,
    duration,
    rating,
    voteCount,
    overview,
    genres,
    budget,
    revenue,
    productionCompanies,
  } = getMovieDetails(movieDetails);

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <View className="bg-primary flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={theme.colors.accent} />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{ uri: getMoviePosterUrl(posterPath) }}
            className="w-full h-[500px]"
          />
        </View>
        <View className="items-start px-5 mt-10">
          <Text className="text-white text-xl font-bold">{title}</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-light-200 text-sm">{releaseYear}</Text>
            <Text className="text-light-200 text-sm">{duration} m</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-2 bg-dark-200 rounded-md px-2 py-1 gap-x-1 w-fit">
            <Image source={icons.star} className="w-5 h-5" />
            <Text className="text-light-200 font-bold text-sm ml-1">
              {rating}/10
            </Text>
            <Text className="text-light-200 text-sm ml-2">
              ({voteCount} votes)
            </Text>
          </View>
          <MovieInfo label="Overview" value={overview} />
          <MovieInfo label="Genres" value={genres} />
          <View className="w-1/2 flex-row justify-between">
            <MovieInfo label="Budget" value={budget} />
            <MovieInfo label="Revenue" value={revenue} />
          </View>
          <MovieInfo label="Production Companies" value={productionCompanies} />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-0 left-0 right-0 p-3 bg-accent rounded-full m-5 flex-row items-center justify-center gap-2 z-50"
        onPress={handleGoBack}
      >
        <Image
          source={icons.arrow}
          className="size-6 rotate-180"
          tintColor={theme.colors.white}
        />
        <Text className="text-white text-center text-lg font-bold">
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
