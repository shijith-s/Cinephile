import { useRouter } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import SearchBar from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function HomePage() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies(null));

  const onSearchBarPress = () => {
    router.push("/search");
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 100,
        }}
        className="flex-1 px-5 pt-10"
      >
        <Image source={icons.logo} className="w-12 h-10 mb-20 mt-24 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : moviesError ? (
          <Text className="text-white text-center">
            Error: {moviesError?.message}
          </Text>
        ) : (
          <View>
            <SearchBar
              placeholder="Search for a movie"
              onPress={onSearchBarPress}
            />
            <Text className="text-white mt-5 mb-5 text-lg font-bold">
              Latest Movies
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 10,
                marginBottom: 30,
              }}
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
