import MovieCard from "@/components/MovieCard";
import SearchedMoviesEmpty from "@/components/MovieListEmpty";
import SearchBar from "@/components/SearchBar";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useInfiniteFetch from "@/services/useInfiniteFetch";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";

export default function HomePage() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    loadMore,
  } = useInfiniteFetch(fetchMovies, null);

  const onSearchBarPress = () => {
    router.push("/search");
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        className="mb-4 mt-3 px-5"
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 10,
          paddingBottom: 80,
        }}
        ListEmptyComponent={
          <SearchedMoviesEmpty
            searchTerm={""}
            loading={moviesLoading}
            error={moviesError}
          />
        }
        ListHeaderComponent={
          <>
            <View className="w-full flex-row items-center justify-center mt-20">
              <Image
                source={icons.logo}
                className="w-12 h-10 mb-20 mt-24 mx-auto"
              />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search for a movie"
                onPress={onSearchBarPress}
              />
              <Text className="text-white mt-8 mb-5 text-lg font-semibold">
                Latest Movies
              </Text>
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
}
