import { useRouter } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const router = useRouter();
  
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
        className="flex-1 px-5"
      >
        <Image source={icons.logo} className="w-12 h-10 mb-20 mt-24 mx-auto" />
        <SearchBar
          placeholder="Search for a movie"
          onPress={onSearchBarPress}
        />
      </ScrollView>
    </View>
  );
}
