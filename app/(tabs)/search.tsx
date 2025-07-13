import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import MovieListEmpty from "@/components/MovieListEmpty";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useInfiniteFetch from "@/services/useInfiniteFetch";
import { debounce } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const {
    data: movies,
    loading,
    error,
    refetch,
    reset,
    loadMore,
  } = useInfiniteFetch(fetchMovies, searchQuery, false);

  const loadMovies = async (searchQuery: string = "") => {
    if (searchQuery?.trim()) {
      await refetch();
    } else {
      reset();
    }
    setIsTyping(false);
  };

  const debouncedLoadMovies = useRef(debounce(loadMovies)).current;

  useEffect(() => {
    setIsTyping(true);
    debouncedLoadMovies(searchQuery);
  }, [searchQuery]);

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies ?? []}
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
          <MovieListEmpty
            searchTerm={searchQuery}
            loading={loading || isTyping}
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
                autoFocus
              />
            </View>
            {searchQuery && movies?.length > 0 && (
              <Text className="text-white text-left text-lg mb-6 mx-5">
                Search results for{" "}
                <Text className="text-light-100 font-semibold italic">
                  {searchQuery}
                </Text>
              </Text>
            )}
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default SearchPage;
