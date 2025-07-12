import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import SearchedMoviesEmpty from "@/components/SearchedMoviesEmpty";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { debounce } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    refetch,
    reset,
  } = useFetch(fetchMovies, false);

  const loadMovies = async (searchQuery: string = "") => {
    if (searchQuery?.trim()) {
      await refetch(searchQuery);
    } else {
      reset();
    }
  };

  const debouncedLoadMovies = useRef(debounce(loadMovies)).current;

  useEffect(() => {
    debouncedLoadMovies(searchQuery);
  }, [searchQuery]);

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        className="px-5"
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 30,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
          gap: 3,
        }}
        ListEmptyComponent={
          <SearchedMoviesEmpty
            searchTerm={searchQuery}
            loading={loading}
            error={error}
          />
        }
        ListHeaderComponent={
          <>
            <View className="w-full flex-row items-center justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                value={searchQuery}
                placeholder="Search movies..."
                onChangeText={handleSearch}
              />
            </View>
            {searchQuery && movies.length > 0 && (
              <Text className="text-white text-left text-lg mb-6 mx-5">
                Search results for{" "}
                <Text className="text-light-100 font-semibold italic">
                  {searchQuery}
                </Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default SearchPage;
